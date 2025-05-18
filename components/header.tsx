import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Glyph } from "@/components/glyph";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-12 relative z-10 mb-6 sm:mb-10 py-8">
      <Link href="/" rel="home" className="flex items-center gap-2 text-lg">
        <Glyph />
        <span>Jonathan Harrell</span>
      </Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};
