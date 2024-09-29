import {ReactNode} from "react";
import type {Metadata} from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Jonathan Harrell",
  description: "Jonathan Harrell's dev experiments",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
