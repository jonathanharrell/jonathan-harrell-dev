import Link from "next/link";
import { Nav } from "@/components/nav";

const HomePage = () => {
  return (
    <div className="grid grid-cols-12 gap-16 py-16">
      <div className="col-span-4">
        <div className="w-24 h-24 bg-neutral-200 rounded-full mb-6" />
        <h1 className="font-forza font-bold text-xl mb-3">Jonathan Harrell</h1>
        <p className="prose mb-4">
          Engineer at <a href="" className="underline">Zapier</a>.<br/>
          Previous: Engineer at <a href="" className="underline">Vowel</a>, engineer at <a href="" className="underline">InVision</a>, designer & developer at <a href="" className="underline">WHQ</a>
        </p>
        <ul className="flex gap-2">
          <li>
            <a href="" className="underline hover:no-underline text-accent">Twitter</a>
          </li>
          <li>
            <a href="" className="underline hover:no-underline text-accent">Github</a>
          </li>
          <li>
            <a href="" className="underline hover:no-underline text-accent">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="col-span-8">
        <Nav />
        <div className="mt-12">
          <header className="mb-8">
            <h2 className="font-forza font-bold text-3xl mb-3">Snippets</h2>
            <p className="prose">A collection of code examples.</p>
          </header>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
            <li className="flex justify-between">
              <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>
              <span className="text-sm text-neutral-500">July 24, 2024</span>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h2 className="font-forza font-bold text-3xl mb-8">Recent Posts</h2>
          <ul className="space-y-8">
            <li>
              <article>
                <header className="mb-3">
                  <h3 className="font-forza font-bold italic text-2xl">
                    <Link href="/blog/contextual-callouts-with-css-grid" className="text-accent">
                      Contextual Callouts with CSS Grid
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-500">
                    August 10, 2017
                  </p>
                </header>
                <p className="prose">
                  Using the power of CSS grid, it is now easier than ever before to create callouts — small paragraphs
                  that sit next to the primary text and offer additional information.
                </p>
              </article>
            </li>
            <li>
              <article>
                <header className="mb-3">
                  <h3 className="font-forza font-bold italic text-2xl">
                    <Link href="/blog/live-theming-with-css-variables" className="text-accent">
                      Live Theming with CSS Variables
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-500">
                    August 10, 2017
                  </p>
                </header>
                <p className="prose">
                  CSS variables are opening up exciting new possibilities, like creating a very performant live theme
                  editor that dynamically updates CSS values.
                </p>
              </article>
            </li>
            <li>
              <article>
                <header className="mb-3">
                  <h3 className="font-forza font-bold italic text-2xl">
                    <Link href="/blog/semantic-image-overlays-with-object-fit" className="text-accent">
                      Semantic Image Overlays With Object-Fit
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-500">
                    August 10, 2017
                  </p>
                </header>
                <p className="prose">
                  Learn how to use CSS grid and the object-fit property to create an image grid with overlays that is
                  semantic and great for SEO.
                </p>
              </article>
            </li>
            <li>
              <article>
                <header className="mb-3">
                  <h3 className="font-forza font-bold italic text-2xl">
                    <Link href="/blog/component-variants-with-scoped-css-variables" className="text-accent">
                      Component Variants with Scoped CSS Variables
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-500">
                    August 10, 2017
                  </p>
                </header>
                <p className="prose">
                  Scoped CSS variables provide an incredibly easy and clean way to create variants of common interface
                  components like buttons.
                </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;