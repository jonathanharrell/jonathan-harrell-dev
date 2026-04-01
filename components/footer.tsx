import { Subscribe } from "@/components/subscribe";
import React from "react";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
            Newsletter
          </p>
          <Subscribe />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
            Links
          </p>
          <section>
            <h2 id="social-label" className="sr-only">
              Social links
            </h2>
            <ul
              className="flex flex-wrap gap-y-2 gap-x-6"
              aria-labelledby="social-label"
            >
              <li>
                <a
                  href="https://blog.jonathanharrell.com/"
                  target="_blank"
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Human in the Loop
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jonathanharrell/"
                  target="_blank"
                  rel="me noreferrer"
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jonathanharrell/"
                  target="_blank"
                  rel="me noreferrer"
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/harrellofdurham/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/rss"
                  target="_blank"
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  RSS
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="flex items-center justify-between py-6 border-t border-neutral-100 dark:border-neutral-900">
        <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          &copy; {currentYear} Jonathan Harrell
        </p>
        <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          Brooklyn, NY
        </p>
      </div>
    </footer>
  );
};
