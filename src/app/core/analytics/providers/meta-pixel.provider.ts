import { AnalyticsProvider } from './analytics-provider.interface';
import { sanitizeAnalyticsParams } from '../analytics.sanitizer';

export class MetaPixelProvider implements AnalyticsProvider {
  readonly name = 'MetaPixel';
  private initialized = false;

  constructor(
    private readonly pixelId: string,
    private readonly isDebug = false
  ) {}

  initialize(): void {
    if (this.initialized || !this.pixelId || typeof window === 'undefined') {
      return;
    }

    try {
      /* eslint-disable */
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */

      window.fbq?.('init', this.pixelId);
      this.initialized = true;

      if (this.isDebug) {
        console.log(`[MetaPixelProvider] Initialized with ID: ${this.pixelId}`);
      }
    } catch (err) {
      if (this.isDebug) {
        console.warn('[MetaPixelProvider] Initialization failed', err);
      }
    }
  }

  trackPageView(path: string, _title?: string, params?: Record<string, unknown>): void {
    if (!this.initialized || typeof window === 'undefined' || !window.fbq) {
      return;
    }

    const cleanParams = sanitizeAnalyticsParams(params);
    window.fbq('track', 'PageView', cleanParams);

    if (this.isDebug) {
      console.log(`[MetaPixelProvider] PageView: ${path}`, cleanParams);
    }
  }

  trackEvent(eventName: string, params?: Record<string, unknown>): void {
    if (!this.initialized || typeof window === 'undefined' || !window.fbq) {
      return;
    }

    const cleanParams = sanitizeAnalyticsParams(params);

    switch (eventName) {
      case 'click_whatsapp':
      case 'whatsapp_click':
        window.fbq('track', 'Contact', { content_name: 'WhatsApp Contact', ...cleanParams });
        break;

      case 'click_phone':
      case 'phone_click':
        window.fbq('track', 'Contact', { content_name: 'Phone Call', ...cleanParams });
        break;

      case 'booking_start':
      case 'booking_flow_start':
        window.fbq('track', 'InitiateCheckout', { content_name: 'Consultation Booking', ...cleanParams });
        break;

      case 'lead':
      case 'contact_form_submit':
        window.fbq('track', 'Lead', { content_name: 'Consultation Request', ...cleanParams });
        break;

      case 'service_view':
      case 'view_service':
        window.fbq('track', 'ViewContent', { content_type: 'service', ...cleanParams });
        break;

      default:
        window.fbq('trackCustom', eventName, cleanParams);
        break;
    }

    if (this.isDebug) {
      console.log(`[MetaPixelProvider] Event: ${eventName}`, cleanParams);
    }
  }
}
