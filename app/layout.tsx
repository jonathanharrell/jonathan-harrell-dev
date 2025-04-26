import React, {
  ReactNode,
  Suspense,
  unstable_ViewTransition as ViewTransition,
} from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/providers/theme-provider";
import { Spinner } from "@/components/spinner";
import { SkipToContent } from "@/components/skip-to-content";
import { Header } from "@/components/header";
import { Subscribe } from "@/components/subscribe";
import { Footer } from "@/components/footer";
import "@/styles/index.css";
import { SITE_URL } from "@/constants";

const gaId = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

export const metadata: Metadata = {
  title:
    "Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Engineer",
  description:
    "Want to stay up-to-date on the latest developments in CSS and JavaScript? Get tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
  openGraph: {
    images: ["/assets/seo/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Engineer",
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ViewTransition>
      <ThemeProvider>
        <html lang="en" suppressHydrationWarning className="bg-neutral-950">
          {/*Note that we should NOT use Next's <Head /> component here since this will cause a flash of the default theme*/}
          <head>
            <link
              rel="preload"
              href="/fonts/etbookot-roman-webfont.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/etbookot-italic-webfont.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link rel="icon" href="/assets/favicon/favicon.ico" sizes="32x32" />
            <link
              rel="icon"
              href="/assets/favicon/icon.svg"
              type="image/svg+xml"
            />
            <link
              rel="apple-touch-icon"
              href="/assets/favicon/apple-touch-icon.png"
            />
            <meta name="color-scheme" content="light dark" />
            {/*<script*/}
            {/*  dangerouslySetInnerHTML={{*/}
            {/*    __html: `${setInitialTheme.toString()}\n\nsetInitialTheme();`,*/}
            {/*  }}*/}
            {/*/>*/}
          </head>
          <body className="min-h-screen bg-neutral-900 font-etbook text-neutral-300">
            <div className="container overflow-hidden">
              <NextTopLoader color="#e6594c" />
              <SkipToContent />
              <Header />
              <main
                id="main"
                className="flex flex-col flex-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                tabIndex={-1}
              >
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center flex-1">
                      <Spinner />
                    </div>
                  }
                >
                  {children}
                </Suspense>
              </main>
              <Subscribe />
              <Footer />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />
            </div>
          </body>
          {gaId && <GoogleAnalytics gaId={gaId} />}
        </html>
      </ThemeProvider>
    </ViewTransition>
  );
}
