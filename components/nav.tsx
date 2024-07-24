import Link from "next/link";

export const Nav = () => {
  return (
    <div className="bg-neutral-200">
      <nav className="max-w-[1300px] mx-auto py-2 px-8 md:px-12 text-[15px] font-ideal-sans">
        <ul className="flex gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}