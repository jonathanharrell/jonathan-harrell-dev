import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ViewTransitions } from "next-view-transitions";

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
      <html lang="en">
        <body className="min-h-screen bg-neutral-100 dark:bg-neutral-900 font-sans text-neutral-800 dark:text-neutral-100">
          <main>
            {children}
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
