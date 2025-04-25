"use client";

import Link from "next/link";
import classNames from "classnames";
import {usePathname} from "next/navigation";

export const DesktopNav = () => {
  const pathname = usePathname();

  const linkClasses = "hover:underline underline-offset-2";

  return (
    <div className="hidden md:flex items-center gap-12 flex-1">
      <nav className="text-lg" aria-labelledby="navigation-label">
        <h2 id="navigation-label" className="sr-only" aria-hidden="true">
          Site navigation
        </h2>
        <Link href="/"
              className={classNames(linkClasses, {"underline": pathname === "/"})}>Home</Link>
        <span role="presentation" className="px-3 text-neutral-600">/</span>
        <Link href="/blog"
              className={classNames(linkClasses, {"underline": pathname?.startsWith("/blog")})}>Blog</Link>
        <span role="presentation" className="px-3 text-neutral-600">/</span>
        <Link href="/about"
              className={classNames(linkClasses, {"underline": pathname === "/about"})}>About</Link>
      </nav>
      <div className="ml-auto">
        <a href="#subscribe"
           className="py-1.5 px-3 rounded-full text-md bg-accent hover:brightness-[80%] text-black transition-all duration-200 ease-in-out">Subscribe</a>
      </div>
    </div>
  );
}