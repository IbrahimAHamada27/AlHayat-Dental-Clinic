import { Injectable, inject, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AnalyticsEventName, AnalyticsEventParams } from '../models/analytics.model';
import { ConsentService } from './consent.service';
import { GA4Provider } from '../analytics/providers/ga4.provider';
import { MetaPixelProvider } from '../analytics/providers/meta-pixel.provider';
import { sanitizeAnalyticsParams } from '../analytics/analytics.sanitizer';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly consentService = inject(ConsentService);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private ga4Provider: GA4Provider | null = null;
  private metaPixelProvider: MetaPixelProvider | null = null;

  // Safe attribution parameters
  private readonly attributionParams: Record<string, string> = {};

  constructor() {
    if (this.isBrowser) {
      this.extractUtmAttribution();

      // Reactively initialize trackers when consent is granted
      effect(() => {
        const isAnalyticsAllowed = this.consentService.isAnalyticsConsented();
        const isMarketingAllowed = this.consentService.isMarketingConsented();

        if (isAnalyticsAllowed && environment.enableAnalytics && environment.gaMeasurementId) {
          if (!this.ga4Provider) {
            this.ga4Provider = new GA4Provider(
              environment.gaMeasurementId,
              environment.debugAnalytics
            );
          }
          this.ga4Provider.initialize();
        }

        if (isMarketingAllowed && environment.enableAnalytics && environment.metaPixelId) {
          if (!this.metaPixelProvider) {
            this.metaPixelProvider = new MetaPixelProvider(
              environment.metaPixelId,
              environment.debugAnalytics
            );
          }
          this.metaPixelProvider.initialize();
        }
      });
    }
  }

  /**
   * Captures safe UTM marketing attribution parameters from current URL
   */
  private extractUtmAttribution(): void {
    if (!this.isBrowser) return;
    try {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
      for (const k of utmKeys) {
        const val = params.get(k);
        if (val) {
          this.attributionParams[k] = val.slice(0, 100); // Safe length capping
        }
      }
    } catch {
      // Ignore
    }
  }

  /**
   * Track virtual page views across Angular route navigations
   */
  trackPageView(path?: string, title?: string, extraParams?: AnalyticsEventParams): void {
    if (!this.isBrowser) return;

    const pagePath = path || window.location.pathname;
    const pageTitle = title || document.title;
    const combinedParams = {
      ...this.attributionParams,
      ...(extraParams || {}),
    };

    if (environment.debugAnalytics) {
      console.log(`[Analytics] PageView -> ${pagePath} (${pageTitle})`, combinedParams);
    }

    if (this.consentService.isAnalyticsConsented() && this.ga4Provider) {
      this.ga4Provider.trackPageView(pagePath, pageTitle, combinedParams);
    }

    if (this.consentService.isMarketingConsented() && this.metaPixelProvider) {
      this.metaPixelProvider.trackPageView(pagePath, pageTitle, combinedParams);
    }
  }

  /**
   * Central event tracker dispatching to consented providers with sanitization
   */
  trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}): void {
    if (!this.isBrowser) return;

    const safeParams = sanitizeAnalyticsParams(params);

    if (environment.debugAnalytics) {
      console.log(`[Analytics] Event -> ${eventName}`, safeParams);
    }

    if (this.consentService.isAnalyticsConsented() && this.ga4Provider) {
      this.ga4Provider.trackEvent(eventName, safeParams);
    }

    if (this.consentService.isMarketingConsented() && this.metaPixelProvider) {
      this.metaPixelProvider.trackEvent(eventName, safeParams);
    }
  }

  /**
   * Track generic CTA click
   */
  trackCtaClick(
    type: 'whatsapp' | 'phone' | 'directions' | 'consultation' | 'service' | 'case' | 'article',
    sourcePage: string,
    context?: string,
    extra: AnalyticsEventParams = {}
  ): void {
    this.trackEvent('consultation_cta_click', {
      ctaType: type,
      sourcePage,
      context,
      ...extra,
    });
  }

  /**
   * Track WhatsApp conversion clicks
   */
  trackWhatsAppClick(context = 'general', params: AnalyticsEventParams = {}): void {
    this.trackEvent('whatsapp_click', {
      category: 'conversion',
      label: context,
      ...params,
    });
  }

  /**
   * Track direct phone call clicks
   */
  trackPhoneClick(context = 'general', params: AnalyticsEventParams = {}): void {
    this.trackEvent('phone_click', {
      category: 'conversion',
      label: context,
      ...params,
    });
  }

  /**
   * Track booking / consultation initiation
   */
  trackBookingStart(source = 'navbar', params: AnalyticsEventParams = {}): void {
    this.trackEvent('booking_flow_start', {
      category: 'lead',
      cta_location: source,
      ...params,
    });
  }

  /**
   * Track Lead submission
   */
  trackLead(serviceName?: string, params: AnalyticsEventParams = {}): void {
    this.trackEvent('lead', {
      category: 'lead',
      service_name: serviceName,
      ...params,
    });
  }
}
