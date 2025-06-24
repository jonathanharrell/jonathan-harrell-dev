import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Chronicle | Jonathan Harrell",
  description:
    "The evolution of Jonathan Harrell's development blog throughout the years.",
  openGraph: {
    images: ["/assets/chronicle/v1.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Chronicle | Jonathan Harrell",
  description:
    "The evolution of Jonathan Harrell's development blog throughout the years.",
  url: `${SITE_URL}/chronicle`,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
    url: "https://www.jonathanharrell.com",
  },
};

const ChroniclePage = () => {
  return (
    <>
      <section className="pb-6 sm:pb-10 md:py-10 text-center">
        <div className="flex flex-col gap-6 flex-1">
          <header className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl">Chronicle</h1>
            <p className="text-2xl md:text-3xl italic">
              The evolution of a site
            </p>
          </header>
          <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-8">
              <header className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl">2017-2018</h2>
                <p className="max-w-[740px] mx-auto text-balance text-xl">
                  This early design featured a vibrant neon green background
                  with geometric line art and bold sans-serif typography. It put
                  a strong emphasis on visual impact, with a central hero
                  section and stylized previews of articles. At the time, I
                  wanted my work as a designer to be front-and-center.
                </p>
              </header>
              <figure>
                <Image
                  src="/assets/chronicle/v1.png"
                  alt="Homepage of a personal website for Jonathan Harrell, a UI/UX designer and front-end developer. The layout features a bold green theme, a centered hero section with a short bio, and links to blog posts on CSS techniques. The page includes stylized illustrations, article previews, and a PostCSS course notification form at the bottom."
                  width={1440}
                  height={5003}
                  quality={100}
                  className="max-w-[600px] mx-auto border border-neutral-200 dark:border-neutral-800"
                />
              </figure>
            </section>
            <section className="flex flex-col gap-8">
              <header className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl">2019</h2>
                <p className="max-w-[740px] mx-auto text-balance text-xl">
                  This version introduced more structure, using card layouts and
                  soft gradients. It emphasized clarity and organization while
                  maintaining a friendly aesthetic. At the time, I wanted to
                  draw more attention to my code experiments.
                </p>
              </header>
              <figure>
                <Image
                  src="/assets/chronicle/v2.png"
                  alt="A clean and modern personal website for Jonathan Harrell, with a white and green color scheme. Features a centered hero section with an email subscription form, a row of recent article cards, and a section of visual experiment thumbnails below. Footer includes contact icons and another subscription form."
                  width={1440}
                  height={5003}
                  quality={100}
                  className="max-w-[600px] mx-auto border border-neutral-200 dark:border-neutral-800"
                />
              </figure>
            </section>
            <section className="flex flex-col gap-8">
              <header className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl">2020-2024</h2>
                <p className="max-w-[740px] mx-auto text-balance text-xl">
                  This version shifted to a more refined, editorial feel, with
                  serif headings and dynamic orange line art. I wanted a mature,
                  stylish look, while also showcasing technical sophistication.
                </p>
              </header>
              <figure>
                <Image
                  src="/assets/chronicle/v3.png"
                  alt="A version of Jonathan Harrell’s website showcasing a refined layout. Includes a left-aligned hero section with a red line-art circle graphic, article previews in a card layout, and a grid of experiment cards with view counts. Footer contains social media icons and a newsletter sign-up form."
                  width={1440}
                  height={5003}
                  quality={100}
                  className="max-w-[600px] mx-auto border border-neutral-200 dark:border-neutral-800"
                />
              </figure>
            </section>
            <section className="flex flex-col gap-8">
              <header className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl">2025</h2>
                <p className="max-w-[740px] mx-auto text-balance text-xl">
                  The current design emphasizes minimalism, spaciousness, and
                  strong typographic hierarchy. Content is arranged in a clean
                  grid, and the layout leans heavily on editorial sensibilities
                  with careful spacing and small details. It reflects a focus on
                  clarity and content, while relying less on illustration.
                </p>
              </header>
              <figure>
                <Image
                  src="/assets/chronicle/v4.png"
                  alt="A minimal, serif-font-focused personal site for Jonathan Harrell, with a clean white and red aesthetic. Top section introduces his role, followed by a grid layout of recent article summaries. A classic “Subscribe” section and simple footer with contact links and font credits appear at the bottom."
                  width={1440}
                  height={5003}
                  quality={100}
                  className="max-w-[600px] mx-auto border border-neutral-200 dark:border-neutral-800"
                />
              </figure>
            </section>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default ChroniclePage;
