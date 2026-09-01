export interface AnalyticsProvider {
  readonly name: string;
  initialize(): void;
  trackPageView(path: string, title?: string, params?: Record<string, unknown>): void;
  trackEvent(eventName: string, params?: Record<string, unknown>): void;
}
