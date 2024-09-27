import { Link } from "next-view-transitions";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/">Jonathan Harrell</Link>
      <nav>
        <ul className="flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Articles</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
      <div className="flex gap-8">
        <button>theme</button>
        <button>subscribe</button>
      </div>
    </header>
  );
}