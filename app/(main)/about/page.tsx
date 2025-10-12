import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/constants";
import classNames from "classnames";
import Link from "next/link";

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
    "Jonathan Harrell is a UI/UX designer and front-end developer. He specializes in and blogs about HTML, CSS, and JavaScript.",
  openGraph: {
    images: ["/assets/images/jonathan-2023.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "About | Jonathan Harrell",
  description:
    "Jonathan Harrell is a UI/UX designer and front-end developer. He specializes in and blogs about HTML, CSS, and JavaScript.",
  url: `${SITE_URL}/about`,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
    url: "https://www.jonathanharrell.com",
  },
};

const AboutPage = () => {
  return (
    <div className="max-w-[800px] mx-auto">
      <section className="pb-6 sm:pb-10 md:py-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex items-start md:justify-end md:order-1">
            <figure className="relative max-w-[260px] md:max-w-[200px] lg:max-w-[300px] mx-auto mt-4 md:mt-0">
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
                className="hidden lg:block absolute -bottom-14 left-16 w-12 h-auto"
                src="/assets/icons/curved-arrow.svg"
                width={48}
                height={48}
                role="presentation"
                alt=""
              />
              <figcaption className="hidden lg:block absolute -bottom-20 right-0 max-w-[200px] text-balance italic text-right text-sm">
                Me on Loch Ness, right before drinking a whiskey hot chocolate
              </figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-3xl font-bold">About Jonathan</h1>
            <p className="md:text-lg">
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
        <header className="mb-10">
          <h2 id="work-label" className="text-2xl font-bold">
            My Work
          </h2>
        </header>
        <ul aria-labelledby="work-label" className="flex flex-col gap-6">
          {workData.map((work, index) => (
            <li key={index} className="md:grid grid-cols-6 gap-12">
              <div className="col-start-1 col-end-4 mb-1">
                <p className="font-sans text-neutral-500 dark:text-neutral-400">
                  {work.start}-{work.end || "present"}
                </p>
              </div>
              <div className="col-start-4 col-end-13">
                <p className="text-lg font-bold">{work.company}</p>
                <p className="font-sans text-neutral-500 dark:text-neutral-400">
                  {work.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section id="uses" className="py-6 sm:py-10">
        <header className="mb-10">
          <h2 id="uses-label" className="text-2xl font-bold">
            What I Use
          </h2>
        </header>
        <ul className="flex flex-col gap-6" aria-labelledby="uses-label">
          {usesData.map((use, index) => (
            <li key={index} className="md:grid grid-cols-6 gap-12 font-sans">
              <p className="col-start-1 col-end-4 mb-1 text-neutral-500 dark:text-neutral-400">
                {use.type}
              </p>
              <p className="col-start-4 col-end-13">
                <a
                  href={use.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 decoration-1 decoration-neutral-300 dark:decoration-neutral-500 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
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
    </div>
  );
};

export default AboutPage;
