import { ReactNode } from "react";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import ThemeProvider from "@/providers/theme-provider";
import {setInitialTheme} from "@/lib/set-initial-theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan Harrell",
  description: "Jonathan Harrell's dev blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ViewTransitions>
      <ThemeProvider>
        <html lang="en" suppressHydrationWarning>
          {/*Note that we should NOT use Next's <Head /> component here since this will cause a flash of the default theme*/}
          <head>
            <script dangerouslySetInnerHTML={{ __html: `${setInitialTheme.toString()}\n\nsetInitialTheme();` }} />
          </head>
          <body className="min-h-screen bg-neutral-100 dark:bg-neutral-900 font-sans text-neutral-800 dark:text-neutral-100">
            <div className="container max-w-3xl py-20">
              {children}
            </div>
          </body>
        </html>
      </ThemeProvider>
    </ViewTransitions>
  );
}
