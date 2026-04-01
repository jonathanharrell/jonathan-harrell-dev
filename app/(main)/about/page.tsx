import Image from "next/image";
import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/constants";

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
    <div>
      {/* Header */}
      <header className="py-12 md:py-16 border-b border-neutral-100 dark:border-neutral-900">
        <span className="block text-[10px] tracking-widest uppercase text-accent mb-3">03</span>
        <h1
          className="font-gt-america font-normal tracking-tight text-neutral-900 dark:text-neutral-100"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
        >
          About Jonathan
        </h1>
      </header>

      {/* Bio section */}
      <section className="py-12 md:py-16 border-b border-neutral-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <figure className="relative max-w-[240px]">
              <Image
                src="/assets/images/jonathan-2023.jpg"
                alt="Image of Jonathan Harrell"
                width={440}
                height={440}
                className="aspect-square max-w-full w-full"
                style={{ filter: "grayscale(20%)" }}
              />
            </figure>
          </div>
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6">
            <p
              className="font-gt-america font-normal leading-snug tracking-tight text-neutral-900 dark:text-neutral-100"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
            >
              Designer and front-end engineer based in Brooklyn, New York.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[600px]">
              Ever since playing around with HyperCard stacks on my Macintosh Classic
              as a kid in the 90s, I&apos;ve been passionate about building things
              with pixels and code. For the last ten years, I&apos;ve been developing
              websites and applications for a wide range of clients, from small
              design agencies to SaaS startups to established software companies.
              While I am now a full-time software engineer, I am also passionate
              about design, and worked for several years as a UI/UX designer.
            </p>
          </div>
        </div>
      </section>

      {/* Work History */}
      <section className="py-12 md:py-16 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[10px] tracking-widest uppercase text-accent">Work history</span>
        </div>
        <table className="w-full border-collapse" aria-labelledby="work-label">
          <caption id="work-label" className="sr-only">Work history</caption>
          <thead>
            <tr>
              <th className="text-left text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 py-3 border-t border-b border-neutral-900 dark:border-neutral-100 font-normal w-[120px]">
                Period
              </th>
              <th className="text-left text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 py-3 border-t border-b border-neutral-900 dark:border-neutral-100 font-normal pl-8">
                Company
              </th>
              <th className="hidden md:table-cell text-left text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 py-3 border-t border-b border-neutral-900 dark:border-neutral-100 font-normal pl-8">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {workData.map((work, index) => (
              <tr key={index} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-4 text-sm text-neutral-400 dark:text-neutral-600 tabular-nums align-top">
                  {work.start}–{work.end || "now"}
                </td>
                <td className="py-4 pl-8 align-top">
                  <p className="font-normal text-neutral-900 dark:text-neutral-100">{work.company}</p>
                  <p className="md:hidden text-sm text-neutral-500 dark:text-neutral-400 mt-1">{work.role}</p>
                </td>
                <td className="hidden md:table-cell py-4 pl-8 text-sm text-neutral-500 dark:text-neutral-400 align-top">
                  {work.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Uses */}
      <section id="uses" className="py-12 md:py-16">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[10px] tracking-widest uppercase text-accent">Tools & equipment</span>
        </div>
        <table className="w-full border-collapse" aria-labelledby="uses-label">
          <caption id="uses-label" className="sr-only">What I use</caption>
          <thead>
            <tr>
              <th className="text-left text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 py-3 border-t border-b border-neutral-900 dark:border-neutral-100 font-normal">
                Category
              </th>
              <th className="text-left text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 py-3 border-t border-b border-neutral-900 dark:border-neutral-100 font-normal pl-8">
                Tool
              </th>
            </tr>
          </thead>
          <tbody>
            {usesData.map((use, index) => (
              <tr key={index} className="border-b border-neutral-100 dark:border-neutral-900">
                <td className="py-4 text-sm text-neutral-400 dark:text-neutral-600 align-top">
                  {use.type}
                </td>
                <td className="py-4 pl-8 align-top">
                  <a
                    href={use.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors underline underline-offset-2 decoration-1 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-accent"
                  >
                    {use.label}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default AboutPage;
