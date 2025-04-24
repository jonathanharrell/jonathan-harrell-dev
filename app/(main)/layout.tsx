import { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/index.css";
import {Header} from "@/components/header";
import {Subscribe} from "@/components/subscribe";
import {Footer} from "@/components/footer";

export const metadata: Metadata = {
  title: "Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Engineer",
  description: "Want to stay up-to-date on the latest developments in CSS and JavaScript? Get tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <body className="min-h-screen dark:bg-neutral-900 font-etbook dark:text-neutral-300">
      <div className="container">
        <main>
          <Header/>
          {children}
          <Subscribe />
          <Footer />
        </main>
      </div>
    </body>
  );
}
