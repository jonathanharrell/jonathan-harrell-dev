"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home", num: "01" },
  { href: "/blog", label: "Articles", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

export const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8 ml-auto">
      <nav className="flex gap-6" aria-labelledby="navigation-label">
        <h2 id="navigation-label" className="sr-only" aria-hidden="true">
          Site navigation
        </h2>
        {navItems.map(({ href, label, num }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={classNames(
                "flex items-baseline gap-1.5 text-sm tracking-wide transition-colors",
                isActive
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100",
              )}
              aria-current={
                href === "/"
                  ? pathname === "/"
                    ? "page"
                    : undefined
                  : pathname === href
                    ? "page"
                    : undefined
              }
            >
              <span className="text-[10px] text-accent font-gt-america">{num}</span>
              {label}
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </div>
  );
};
