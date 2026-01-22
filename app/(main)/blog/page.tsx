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
    <div className="max-w-[800px] mx-auto">
      <header className="h-feed py-6 sm:py-10">
        <h1 className="p-name text-3xl font-bold">Articles</h1>
      </header>
      <section className="py-6 sm:py-10">
        <ul className="flex flex-col gap-8">
          {posts.map((post, index) => {
            const formattedDate = new Date(
              post.frontmatter.date,
            ).toLocaleDateString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <li key={index}>
                <article className="h-entry md:grid grid-cols-6 gap-12">
                  <div className="col-start-1 col-end-3 mb-2">
                    <time
                      dateTime={post.frontmatter.date}
                      className="dt-published font-sans text-neutral-500 dark:text-neutral-400"
                    >
                      {formattedDate}
                    </time>
                  </div>
                  <div className="col-start-3 col-end-13">
                    <h2 className="mb-2 text-lg font-bold">
                      <Link
                        href={`/blog/${post.frontmatter.slug}`}
                        className="p-name hover:underline decoration-2 underline-offset-2 decoration-neutral-300 dark:decoration-neutral-600"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="p-summary font-sans text-neutral-500 dark:text-neutral-400">
                      {post.frontmatter.description}
                    </p>
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
