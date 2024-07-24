import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li><Link href="/"><span className="text-neutral-400">/</span>Home</Link></li>
        <li><Link href="/blog"><span className="text-neutral-400">/</span>Blog</Link></li>
        <li><Link href="/about"><span className="text-neutral-400">/</span>About</Link></li>
      </ul>
    </nav>
  )
}