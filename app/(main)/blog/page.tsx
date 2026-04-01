import Link from "next/link";
import { getPosts } from "@/lib/get-posts";
import type { Metadata } from "next";
import React from "react";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Articles | Jonathan Harrell",
  description:
    "Stay update to date on the latest developments in HTML, CSS and Javascript. Read Jonathan Harrell's blog for tips, tricks and techniques.",
  openGraph: {
    images: ["/assets/seo/og.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  name: "Articles | Jonathan Harrell",
  description:
    "Stay update to date on the latest developments in HTML, CSS and Javascript. Read Jonathan Harrell's blog for tips, tricks and techniques.",
  url: `${SITE_URL}/blog`,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
    url: "https://www.jonathanharrell.com",
  },
};

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <div className="h-feed">
      <header className="py-12 md:py-16 border-b border-neutral-100 dark:border-neutral-900">
        <span className="block text-[10px] tracking-widest uppercase text-accent mb-3">02</span>
        <h1
          className="p-name font-gt-america font-normal tracking-tight text-neutral-900 dark:text-neutral-100"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}
        >
          Articles
        </h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400 text-sm tracking-wide">
          {posts.length} articles on CSS, JavaScript, and design
        </p>
      </header>

      <section className="py-4">
        <ul className="flex flex-col">
          {posts.map((post, index) => {
            const formattedDate = new Date(
              post.frontmatter.date,
            ).toLocaleDateString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            const year = new Date(post.frontmatter.date).getFullYear();

            return (
              <li key={index} className="border-t border-neutral-200 dark:border-neutral-800">
                <article className="h-entry grid grid-cols-12 gap-4 py-6 group">
                  <div className="col-span-12 md:col-span-2">
                    <time
                      dateTime={post.frontmatter.date}
                      className="dt-published text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600"
                    >
                      {year}
                    </time>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <h2 className="mb-2 text-lg font-normal leading-snug">
                      <Link
                        href={`/blog/${post.frontmatter.slug}`}
                        className="p-name text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="p-summary text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                  </div>
                  <div className="hidden md:flex col-span-3 items-start justify-end">
                    <Link
                      href={`/blog/${post.frontmatter.slug}`}
                      className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600 group-hover:text-accent transition-colors flex items-center gap-2"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      Read
                      <span className="w-4 h-px bg-current inline-block" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default BlogPage;
