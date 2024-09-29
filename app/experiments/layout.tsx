import {ReactNode} from "react";
import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonathan Harrell",
  description: "Jonathan Harrell's dev experiments",
};

export default function ExperimentsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <body className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100">
      {children}
    </body>
  );
}
