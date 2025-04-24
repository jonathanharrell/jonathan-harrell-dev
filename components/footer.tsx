import Link from "next/link";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 py-10 pb-12 text-center text-neutral-500">
      <Link href="/">
        &copy; 2017–{currentYear} Jonathan Harrell
      </Link>
      <ul className="flex gap-6">
        <li><a href="" className="underline hover:no-underline underline-offset-2">Github</a></li>
        <li><a href="" className="underline hover:no-underline underline-offset-2">LinkedIn</a></li>
        <li><a href="" className="underline hover:no-underline underline-offset-2">Instagram</a></li>
        <li><a href="" className="underline hover:no-underline underline-offset-2">RSS</a></li>
      </ul>
    </footer>
  )
}