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
  url: `${SITE_URL}blog`,
  author: {
    "@type": "Person",
    name: "Jonathan Harrell",
  },
};

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <>
      <header className="py-10">
        <h1 className="text-4xl md:text-5xl">Articles</h1>
      </header>
      <section className="py-10">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <li key={index}>
              <article>
                <p
                  aria-hidden="true"
                  className="text-4xl text-neutral-600 mb-1"
                >
                  {("0" + (posts.length - index)).slice(-2)}
                </p>
                <h2 className="text-xl mb-2">
                  <Link
                    href={`/blog/${post.frontmatter.slug}`}
                    className="hover:underline decoration-1 underline-offset-2"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-lg text-neutral-400">
                  {post.frontmatter.description}
                </p>
              </article>
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

export default BlogPage;
