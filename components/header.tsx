import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 relative z-10 py-5 border-b border-neutral-200 dark:border-neutral-800">
      <Link
        href="/"
        rel="home"
        className="text-sm tracking-widest uppercase font-gt-america text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors"
      >
        Jonathan Harrell
      </Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};
