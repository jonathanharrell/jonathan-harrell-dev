import { Subscribe } from "@/components/subscribe";
import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 py-16">
      <Subscribe />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 font-sans text-sm text-center text-neutral-500 dark:text-neutral-400">
        <p className="text-center lg:text-left">
          &copy; {currentYear} Jonathan Harrell
        </p>
        <section>
          <h2 id="social-label" className="sr-only">
            Social links
          </h2>
          <ul
            className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6"
            aria-labelledby="social-label"
          >
            <li>
              <a
                href="https://blog.jonathanharrell.com/"
                target="_blank"
                className="hover:underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
              >
                Human in the Loop
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathanharrell/"
                target="_blank"
                rel="me noreferrer"
                className="hover:underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jonathanharrell/"
                target="_blank"
                rel="me noreferrer"
                className="hover:underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/harrellofdurham/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="/rss"
                target="_blank"
                className="hover:underline underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
              >
                RSS
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
