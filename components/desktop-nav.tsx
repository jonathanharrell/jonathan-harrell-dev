"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export const DesktopNav = () => {
  const pathname = usePathname();

  const linkClasses = "hover:underline underline-offset-2";

  return (
    <div className="hidden md:flex items-center gap-12 flex-1">
      <nav className="text-lg" aria-labelledby="navigation-label">
        <h2 id="navigation-label" className="sr-only" aria-hidden="true">
          Site navigation
        </h2>
        <Link
          href="/"
          className={classNames(linkClasses, { underline: pathname === "/" })}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <span className="px-3 text-neutral-600" aria-hidden="true">
          /
        </span>
        <Link
          href="/blog"
          className={classNames(linkClasses, {
            underline: pathname?.startsWith("/blog"),
          })}
          aria-current={pathname === "/blog" ? "page" : undefined}
        >
          Blog
        </Link>
        <span className="px-3 text-neutral-600" aria-hidden="true">
          /
        </span>
        <Link
          href="/about"
          className={classNames(linkClasses, {
            underline: pathname === "/about",
          })}
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
      </nav>
      <div className="flex items-center gap-6 ml-auto">
        <ThemeToggle />
        <a
          href="#subscribe"
          className="py-1.5 px-3 rounded-full text-md bg-accent hover:brightness-[90%] hover:dark:brightness-[80%] text-black transition-all duration-200 ease-in-out"
        >
          Subscribe
        </a>
      </div>
    </div>
  );
};
