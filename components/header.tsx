import Image from "next/image";
import Link from "next/link";
import {DesktopNav} from "@/components/desktop-nav";
import Glyph1 from "/public/assets/glyphs/glyph-1.svg";
import {MobileNav} from "@/components/mobile-nav";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-12 relative z-10 mb-10 py-8">
      <Link href="/" className="flex items-center gap-2 text-lg">
        <Image
          src={Glyph1.src}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span>Jonathan Harrell</span>
      </Link>
      <DesktopNav />
      <MobileNav />
    </header>
  );
}