import { ReactNode } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Jonathan Harrell",
  description: "Jonathan Harrell's dev blog",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <body className="min-h-screen bg-white dark:bg-neutral-900 font-etbook text-neutral-800 dark:text-neutral-300">
      <div className="container">
        {children}
      </div>
    </body>
  );
}
