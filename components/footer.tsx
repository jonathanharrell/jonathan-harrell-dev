import Link from "next/link";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 py-10 pb-12 text-center text-neutral-500">
      <p className="text-left">
        &copy; {currentYear} Jonathan Harrell
        <br role="presentation" />
        Typeset in{" "}
        <a
          href="https://edwardtufte.github.io/et-book/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          ET Book
        </a>
        , with{` `}
        <a
          href="https://www.kickstarter.com/projects/mrcraigward/fe2o3-glyphs-a-conceptual-ornamental-type-system"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          Fe<sub>2</sub>O<sub>3</sub> glyphs
        </a>
        . Arrow icon by{" "}
        <a
          href="https://thenounproject.com/creator/indygo/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          kiddo
        </a>
        .
      </p>
      <section>
        <h2 id="social-label" className="sr-only">
          Social links
        </h2>
        <ul className="flex gap-6" aria-labelledby="social-label">
          <li>
            <a
              href="https://blog.jonathan-harrell.com/"
              target="_blank"
              className="underline hover:no-underline underline-offset-2"
            >
              Human in the Loop
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jonathanharrell/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline underline-offset-2"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonathanharrell/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline underline-offset-2"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/harrellofdurham/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline underline-offset-2"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="/rss.xml"
              target="_blank"
              className="underline hover:no-underline underline-offset-2"
            >
              RSS
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
