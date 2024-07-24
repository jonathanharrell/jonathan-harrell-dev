import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

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
    <html lang="en" className="bg-neutral-200 dark:bg-neutral-800 dark">
      <body className="min-h-screen bg-neutral-100 dark:bg-neutral-900 font-ideal-sans text-neutral-800 dark:text-neutral-100">
        <main className="container max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  );
}
