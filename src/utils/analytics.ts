interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customData?: Record<string, any>;
}

interface AnalyticsConfig {
  trackingId?: string;
  enabled: boolean;
  debug: boolean;
}

class AnalyticsService {
  private config: AnalyticsConfig;
  private queue: AnalyticsEvent[] = [];
  private initialized = false;

  constructor() {
    this.config = {
      trackingId: import.meta.env.VITE_CS_ANALYTICS_ID,
      enabled: import.meta.env.PROD && !!import.meta.env.VITE_CS_ANALYTICS_ID,
      debug: import.meta.env.DEV
    };
  }

  async initialize(): Promise<void> {
    if (this.initialized || !this.config.enabled) return;

    try {
      // Initialize Google Analytics 4 if tracking ID is provided
      if (this.config.trackingId) {
        // Load gtag script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.config.trackingId}`;
        document.head.appendChild(script);

        // Initialize gtag
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).gtag = function() {
          (window as any).dataLayer.push(arguments);
        };
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', this.config.trackingId, {
          page_title: document.title,
          page_location: window.location.href
        });
      }

      this.initialized = true;

      // Process queued events
      this.queue.forEach(event => this.trackEvent(event));
      this.queue = [];

      if (this.config.debug) {
        console.log('Analytics initialized');
      }
    } catch (error) {
      console.error('Failed to initialize analytics:', error);
    }
  }

  trackEvent(event: AnalyticsEvent): void {
    if (!this.config.enabled) return;

    if (!this.initialized) {
      this.queue.push(event);
      return;
    }

    try {
      // Google Analytics 4 event tracking
      if (this.config.trackingId && (window as any).gtag) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          custom_parameters: event.customData
        });
      }

      // Custom analytics endpoint (if needed)
      this.sendToCustomEndpoint(event);

      if (this.config.debug) {
        console.log('Analytics event tracked:', event);
      }
    } catch (error) {
      console.error('Failed to track analytics event:', error);
    }
  }

  trackPageView(path: string, title?: string): void {
    if (!this.config.enabled) return;

    try {
      if (this.config.trackingId && (window as any).gtag) {
        (window as any).gtag('config', this.config.trackingId, {
          page_path: path,
          page_title: title || document.title
        });
      }

      if (this.config.debug) {
        console.log('Page view tracked:', { path, title });
      }
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  trackUserAction(action: string, details?: Record<string, any>): void {
    this.trackEvent({
      action,
      category: 'user_interaction',
      customData: details
    });
  }

  trackAssessmentEvent(action: 'started' | 'completed' | 'abandoned', assessmentType: string, details?: any): void {
    this.trackEvent({
      action: `assessment_${action}`,
      category: 'assessment',
      label: assessmentType,
      customData: details
    });
  }

  trackConversion(conversionType: 'signup' | 'upgrade' | 'trial_start', value?: number): void {
    this.trackEvent({
      action: 'conversion',
      category: 'business',
      label: conversionType,
      value
    });
  }

  private async sendToCustomEndpoint(event: AnalyticsEvent): Promise<void> {
    try {
      // Send to custom analytics endpoint if configured
      const endpoint = import.meta.env.VITE_CUSTOM_ANALYTICS_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...event,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
        });
      }
    } catch (error) {
      // Silently fail for analytics
      if (this.config.debug) {
        console.error('Custom analytics endpoint failed:', error);
      }
    }
  }
}

export const analytics = new AnalyticsService();

// Convenience functions
export const trackPageView = (path: string, title?: string) => analytics.trackPageView(path, title);
export const trackUserAction = (action: string, details?: Record<string, any>) => analytics.trackUserAction(action, details);
export const trackAssessmentEvent = (action: 'started' | 'completed' | 'abandoned', type: string, details?: any) => analytics.trackAssessmentEvent(action, type, details);
export const trackConversion = (type: 'signup' | 'upgrade' | 'trial_start', value?: number) => analytics.trackConversion(type, value);