import "@/app/prism.css";
import { Nav } from "@/components/nav";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[65ch] mx-auto py-6">
      <header className="flex items-center gap-8">
        <span>JH</span>
        <Nav/>
      </header>
      <article className="full-post mt-16 mb-16">
        <header className="mb-12">
          <p className="text-sm mb-3">July 24, 2024</p>
          <h1 className="mb-2 font-forza italic font-bold text-5xl text-balance tracking-tighter text-accent">Contextual
            Callouts with CSS Grid</h1>
          <ul className="flex gap-3 italic text-neutral-500">
            <li>#Tag 1</li>
            <li>#Tag 2</li>
          </ul>
        </header>
        <div className="prose">{children}</div>
        <footer className="mt-12">
          <p className="text-accent">• Finito</p>
        </footer>
      </article>
    </div>
  );
};

export default Layout;