import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/constants";
import classNames from "classnames";

interface Work {
  start: string;
  end?: string;
  role: string;
  company: string;
}

const workData: Work[] = [
  {
    start: "2023",
    role: "Senior Frontend Engineer",
    company: "Zapier",
  },
  {
    start: "2021",
    end: "2023",
    role: "Senior UI Engineer",
    company: "Vowel",
  },
  {
    start: "2018",
    end: "2021",
    role: "Senior Software Engineer, Internal Tools",
    company: "InVision",
  },
  {
    start: "2014",
    end: "2018",
    role: "UI/UX Designer & Frontend Developer",
    company: "WHQ",
  },
  {
    start: "2012",
    end: "2014",
    role: "TaLK Scholar",
    company: "Teach and Learn in Korea",
  },
  {
    start: "2010",
    end: "2012",
    role: "Graphic Designer & Marketing Associate",
    company: "Cambridge Educational Services",
  },
];

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
    images: ["/assets/images/jonathan-2023.jpg"],
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
    url: "https://www.jonathanharrell.com",
  },
};

const AboutPage = () => {
  return (
    <>
      <section className="pb-6 sm:pb-10 md:py-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex items-start md:justify-end md:order-1">
            <figure className="relative max-w-[260px] md:max-w-[200px] lg:max-w-[400px] lg:-mt-[60px] mx-auto">
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
              I’m Jonathan Harrell, a designer and front-end engineer. Ever
              since playing around with HyperCard stacks on my Macintosh Classic
              as a kid in the 90s, I’ve been passionate about building things
              with pixels and code. For the last ten years, I’ve been developing
              websites and applications for a wide range of clients, from small
              design agencies to SaaS startups to established software
              companies. While I am now a full-time software engineer, I am also
              passionate about design, and worked for several years as a UI/UX
              designer. I am currently based in Brooklyn, New York.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-6 sm:pt-10 pb-2">
        <header>
          <h2 id="work-label" className="text-3xl italic">
            My Work
          </h2>
        </header>
        <hr
          role="presentation"
          className="my-6 border-neutral-200 dark:border-neutral-800 border-dashed"
        />
        <ul
          aria-labelledby="work-label"
          className="grid gap-x-4 md:gap-x-6"
          style={{ gridTemplateColumns: "auto auto 1fr" }}
        >
          {workData.map((work, index) => (
            <li
              key={index}
              className="grid grid-cols-subgrid col-start-1 col-end-4"
            >
              <div className="-mt-0.5 md:mt-0.5 text-lg text-right">
                {work.start}-{work.end || "present"}
              </div>
              <div role="presentation" className="relative h-full">
                <div
                  className={classNames(
                    "w-6 md:w-8 h-6 md:h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700",
                    {
                      "before:block before:absolute before:bottom-0 before:left-1/2 before:h-[calc(100%-24px)] before:md:h-[calc(100%-32px)] before:w-[2px] before:bg-neutral-300 before:dark:bg-neutral-700 before:-translate-x-1/2 before:content-['']":
                        index !== workData.length - 1,
                    },
                  )}
                />
              </div>
              <div className="-mt-0.5 md:mt-0.5 pb-5 md:pb-8 text-xl">
                {work.role}, {work.company}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="uses" className="py-6 sm:py-10">
        <header>
          <h2 id="uses-label" className="text-3xl italic">
            What I Use
          </h2>
        </header>
        <hr
          role="presentation"
          className="my-6 border-neutral-200 dark:border-neutral-800 border-dashed"
        />
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          aria-labelledby="uses-label"
        >
          {usesData.map((use, index) => (
            <li key={index}>
              <p className="text-lg text-neutral-500 dark:text-neutral-400">
                {use.type}
              </p>
              <p>
                <a
                  href={use.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl underline hover:no-underline underline-offset-2 decoration-1 decoration-neutral-400 dark:decoration-neutral-200"
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
