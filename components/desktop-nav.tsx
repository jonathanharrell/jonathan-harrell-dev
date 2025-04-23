import {headers} from "next/headers";
import {Link} from "next-view-transitions";
import classNames from "classnames";

export const DesktopNav = () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  return (
    <div className="hidden md:flex items-center gap-12 flex-1">
      <nav className="text-lg">
        <Link href="/"
              className={classNames("hover:underline underline-offset-2", {"underline": pathname === "/"})}>Home</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/blog"
              className={classNames("hover:underline underline-offset-2", {"underline": pathname?.startsWith("/blog")})}>Blog</Link>
        <span className="px-3 text-neutral-600">/</span>
        <Link href="/about"
              className={classNames("hover:underline underline-offset-2", {"underline": pathname?.startsWith("/about")})}>About</Link>
      </nav>
      <div className="ml-auto">
        <a href="#subscribe" className="py-1.5 px-3 rounded-full text-md bg-accent text-black">Subscribe</a>
      </div>
    </div>
  );
}