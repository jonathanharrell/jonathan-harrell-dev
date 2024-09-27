import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { HeaderAnimation } from "@/components/header-animation";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <header className="relative mb-12">
      <button className="absolute right-0">theme</button>
      <Link href="/" title="Go home">
        <HeaderAnimation className="w-16 h-16" style={{ viewTransitionName: "header-image" }} />
        <span className="sr-only">Go to home page</span>
      </Link>
      <h1 className="mt-12 font-semibold">{title}</h1>
      {subtitle && (
        <p className="mt-1">{subtitle}</p>
      )}
      {children}
    </header>
  );
}