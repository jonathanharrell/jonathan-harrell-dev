import { Link } from "next-view-transitions";
import Image from "next/image";
import Glyph1 from "/public/assets/glyphs/glyph-1.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-12 max-w-[1100px] mx-auto py-12">
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
        <Link href="/blog">Blog</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/about">About</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/work">Work</Link>
      </nav>
      <p className="ml-auto text-lg text-accent">Subscribe</p>
    </header>
  );
}