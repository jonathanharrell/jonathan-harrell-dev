import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://5e98a7eb25ba414ea6a4958129c6e3d1@o87029.ingest.us.sentry.io/214823",
  sendDefaultPii: true,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
