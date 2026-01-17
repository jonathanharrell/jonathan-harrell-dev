"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export const DesktopNav = () => {
  const pathname = usePathname();

  const linkClasses = "px-4";

  return (
    <div className="hidden md:flex items-center gap-12 ml-auto font-sans">
      <nav className="desktop-nav flex" aria-labelledby="navigation-label">
        <h2 id="navigation-label" className="sr-only" aria-hidden="true">
          Site navigation
        </h2>
        <Link
          href="/"
          className={classNames(linkClasses, { active: pathname === "/" })}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={classNames(linkClasses, {
            active: pathname?.startsWith("/blog"),
          })}
          aria-current={pathname === "/blog" ? "page" : undefined}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={classNames(linkClasses, {
            active: pathname === "/about",
          })}
          aria-current={pathname === "/about" ? "page" : undefined}
        >
          About
        </Link>
      </nav>
      <ThemeToggle />
    </div>
  );
};
