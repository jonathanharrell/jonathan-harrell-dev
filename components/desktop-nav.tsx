"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export const DesktopNav = () => {
  const pathname = usePathname();

  const linkClasses =
    "hover:underline underline-offset-2 decoration-neutral-400 dark:decoration-neutral-500";

  return (
    <div className="hidden md:flex items-center gap-12 ml-auto">
      <nav className="flex gap-8" aria-labelledby="navigation-label">
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
        <Link
          href="/blog"
          className={classNames(linkClasses, {
            underline: pathname?.startsWith("/blog"),
          })}
          aria-current={pathname === "/blog" ? "page" : undefined}
        >
          Blog
        </Link>
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
      <ThemeToggle />
    </div>
  );
};
