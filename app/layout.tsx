import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";
import ThemeProvider from "@/providers/theme-provider";
import useTheme from "@/hooks/use-theme";

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
        <html lang="en">
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
