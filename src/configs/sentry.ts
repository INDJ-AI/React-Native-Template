import * as Sentry from '@sentry/react-native';
import { SENTRY_API_KEY } from '@env';

export const SentryInit = () => {
  return Sentry.init({
    dsn: SENTRY_API_KEY,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    _experiments: {
      // profilesSampleRate is relative to tracesSampleRate.
      // Here, we'll capture profiles for 100% of transactions.
      profilesSampleRate: 1.0,
    },
  });
};

exports = {
  SentryInit,
};
