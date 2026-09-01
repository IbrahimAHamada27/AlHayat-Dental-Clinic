import { AnalyticsProvider } from './analytics-provider.interface';
import { sanitizeAnalyticsParams } from '../analytics.sanitizer';

export class GA4Provider implements AnalyticsProvider {
  readonly name = 'GA4';
  private initialized = false;

  constructor(
    private readonly measurementId: string,
    private readonly isDebug = false
  ) {}

  initialize(): void {
    if (this.initialized || !this.measurementId || typeof window === 'undefined') {
      return;
    }

    try {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', this.measurementId, { send_page_view: false });
      this.initialized = true;

      if (this.isDebug) {
        console.log(`[GA4Provider] Initialized with ID: ${this.measurementId}`);
      }
    } catch (err) {
      if (this.isDebug) {
        console.warn('[GA4Provider] Initialization failed', err);
      }
    }
  }

  trackPageView(path: string, title?: string, params?: Record<string, unknown>): void {
    if (!this.initialized || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    const cleanParams = sanitizeAnalyticsParams(params);
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
      ...cleanParams,
    });

    if (this.isDebug) {
      console.log(`[GA4Provider] PageView: ${path}`, cleanParams);
    }
  }

  trackEvent(eventName: string, params?: Record<string, unknown>): void {
    if (!this.initialized || typeof window === 'undefined' || !window.gtag) {
      return;
    }

    const cleanParams = sanitizeAnalyticsParams(params);
    window.gtag('event', eventName, cleanParams);

    if (this.isDebug) {
      console.log(`[GA4Provider] Event: ${eventName}`, cleanParams);
    }
  }
}
