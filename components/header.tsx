import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { HeaderAnimation } from "@/components/header-animation";
import {ThemeToggle} from "@/components/theme-toggle";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <header className="relative mb-12">
      <div className="absolute right-0">
        <ThemeToggle />
      </div>
      <Link href="/" title="Go home" className="inline-block">
        <HeaderAnimation className="w-20 h-20" />
        <span className="sr-only">Go to home page</span>
      </Link>
      <h1 className="mt-12 font-semibold">{title}</h1>
      {subtitle && (
        <p className="mt-1 dark:text-neutral-400">{subtitle}</p>
      )}
      {children}
    </header>
  );
}