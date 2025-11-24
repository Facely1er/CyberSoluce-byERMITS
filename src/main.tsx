import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { getAppConfig } from './utils/environment';
import { validateEnvironmentOnStartup } from './utils/validateEnvironment';

// Validate environment configuration on startup
validateEnvironmentOnStartup();

// Initialize Sentry error tracking in production
if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
  import('@sentry/react').then((SentryModule) => {
    const config = getAppConfig();
    SentryModule.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: config.monitoring.sentryEnvironment,
      integrations: [
        SentryModule.browserTracingIntegration(),
        SentryModule.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: config.monitoring.performanceMonitoringEnabled ? 0.1 : 0,
      // Session Replay
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      // Release tracking
      release: `${config.name}@${config.version}`,
    });
  }).catch((error) => {
    console.error('Failed to initialize Sentry:', error);
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);