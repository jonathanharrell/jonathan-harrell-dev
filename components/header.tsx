import { Link } from "next-view-transitions";
import Image from "next/image";
import {headers} from "next/headers";
import Glyph1 from "/public/assets/glyphs/glyph-1.svg";
import classNames from "classnames";

export const Header = () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  return (
    <header className="flex items-center justify-between gap-12 relative z-10 max-w-[1100px] mx-auto py-8">
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
      <nav className="text-lg">
        <Link href="/" className={classNames({ "underline": pathname === "/" })}>Home</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/blog" className={classNames({ "underline": pathname?.startsWith("/blog") })}>Blog</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/about" className={classNames({ "underline": pathname?.startsWith("/about") })}>About</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="#subscribe">Subscribe</Link>
      </nav>
    </header>
  );
}