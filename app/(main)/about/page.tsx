import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/constants";

interface Use {
  url: string;
  type: string;
  label: string;
}

const usesData: Use[] = [
  {
    url: "https://www.jetbrains.com/webstorm/",
    type: "IDE",
    label: "Webstorm",
  },
  {
    url: "https://figma.com/",
    type: "UI Design",
    label: "Figma",
  },
  {
    url: "https://ulysses.app",
    type: "Long-form Writing",
    label: "Ulysses",
  },
  {
    url: "https://lightroom.adobe.com",
    type: "Photo Editing",
    label: "Lightroom",
  },
  {
    url: "https://www.backblaze.com",
    type: "Backup",
    label: "Backblaze",
  },
  {
    url: "https://packhacker.com/travel-gear/ebags/pro-slim-laptop-backpack/",
    type: "Backpack",
    label: "eBags Pro Slim",
  },
  {
    url: "https://www.apple.com/airpods-pro",
    type: "Headphones",
    label: "Airpods Pro",
  },
];

export const metadata: Metadata = {
  title: "About | Jonathan Harrell",
  description:
    "Jonathan Harrell is a UI/UX designer and front-end developer. He specializes in and blogs about HTML and CSS. Learn more.",
  openGraph: {
    images: ["/assets/seo/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "About | Jonathan Harrell",
  description:
    "Jonathan Harrell is a UI/UX designer and front-end developer. He specializes in and blogs about HTML and CSS. Learn more.",
  url: `${SITE_URL}about`,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
  },
};

const AboutPage = () => {
  return (
    <>
      <section className="pb-10 md:py-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex items-start md:justify-end md:order-1">
            <figure className="relative max-w-[300px] md:max-w-[200px] lg:max-w-[400px] lg:-mt-[60px] mx-auto">
              <div className="relative">
                <Image
                  src="/assets/images/jonathan-2023.jpg"
                  alt="Image of Jonathan Harrell"
                  width={440}
                  height={440}
                  className="aspect-square max-w-full rounded-full"
                />
                <svg
                  role="presentation"
                  className="absolute top-0 left-0 w-full h-full translate-x-[-16px] translate-y-[-16px]"
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="49%"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                  ></circle>
                </svg>
                <svg
                  role="presentation"
                  className="absolute top-0 left-0 w-full h-full  translate-x-[16px] translate-y-[16px]"
                >
                  <circle
                    cx="50%"
                    cy="50%"
                    r="49%"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                  ></circle>
                </svg>
              </div>
              <Image
                className="hidden lg:block absolute -bottom-14 left-28 w-12"
                src="/assets/icons/curved-arrow.svg"
                width={48}
                height={48}
                role="presentation"
                alt=""
              />
              <figcaption className="hidden lg:block absolute -bottom-20 right-8 max-w-[200px] text-balance italic text-right">
                Me on Loch Ness, right before drinking a whiskey hot chocolate
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-4xl md:text-5xl">About Jonathan</h1>
            <p className="text-xl">
              I’m Jonathan Harrell, a designer and front-end engineer. I’ve been
              developing websites and applications for the last ten years for a
              wide range of clients, from SaaS startups to established software
              companies to global hedge funds. While I am now a full-time
              software engineer, I am also passionate about design, and have
              worked as a UI/UX designer in an agency context. I am currently
              based in Brooklyn, New York.
            </p>
            <p className="text-xl">
              I have another blog, called{" "}
              <a
                href="https://blog.jonathan-harrell.com"
                target="_blank"
                className="underline hover:no-underline underline-offset-2 decoration-1"
              >
                Human in the Loop
              </a>
              , which I treat as a digital commonplace book—a repository for
              poems, photos, art, and more. Check it out if you’re curious!
            </p>
          </div>
        </div>
      </section>
      <section id="uses" className="py-10">
        <header>
          <h2 id="uses-label" className="text-3xl italic">
            What I Use
          </h2>
        </header>
        <hr
          role="presentation"
          className="my-6 border-neutral-800 border-dashed"
        />
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          aria-labelledby="uses-label"
        >
          {usesData.map((use, index) => (
            <li key={index}>
              <p className="text-lg text-neutral-400">{use.type}</p>
              <p>
                <a
                  href={use.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl underline hover:no-underline underline-offset-2 decoration-1 decoration-neutral-200"
                >
                  {use.label}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default AboutPage;
