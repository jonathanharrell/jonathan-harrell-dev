import Link from "next/link";
import * as Sentry from "@sentry/nextjs";
import slugify from "slugify";
import { ArrowLeft, ArrowRight } from "react-feather";
import classNames from "classnames";
import { getPostData } from "@/lib/get-post-data";
import { getPreviousAndNextPosts } from "@/lib/get-previous-and-next-posts";
import { getPostSlugs } from "@/lib/get-post-slugs";
import { Mention } from "@/components/mention";
import { SITE_URL } from "@/constants";
import type { Mention as MentionType } from "@/types";
import "@/styles/prism.css";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;

  const [post, { previous, next }] = await Promise.all([
    getPostData(slug),
    getPreviousAndNextPosts(slug),
  ]);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    author: {
      "@type": "Person",
      name: "Jonathan Harrell",
    },
    datePublished: post.frontmatter.date,
    dateCreated: post.frontmatter.date,
    url: `${SITE_URL}/blog/${slug}`,
    "inLanguage ": "en-US",
    image: `${SITE_URL}/assets/seo/og.png`,
    keywords: post.frontmatter.tags.join(","),
  };

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  const uniqueClassName = slugify(post.frontmatter.title, { lower: true });

  let mentions: MentionType[] = [];

  try {
    const response = await fetch(
      `https://webmention.io/api/mentions.jf2?target=${SITE_URL}/blog/${slug}`,
    );
    const data = await response.json();
    mentions = data.children;
  } catch (error) {
    Sentry.captureException(error);
  }

  return (
    <article className="h-entry">
      <header className="py-12 md:py-16 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex items-center gap-4 mb-6">
          <time
            dateTime={post.frontmatter.date}
            className="dt-published text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600"
          >
            {formattedDate}
          </time>
          {Boolean(post.frontmatter.tags.length) && (
            <>
              <span aria-hidden="true" className="w-4 h-px bg-neutral-300 dark:bg-neutral-700 inline-block" />
              <Tags tags={post.frontmatter.tags} />
            </>
          )}
        </div>
        <h1
          className="p-name font-gt-america font-normal tracking-tight text-neutral-900 dark:text-neutral-100 max-w-[800px]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          {post.frontmatter.title}
        </h1>
      </header>
      <div
        className={classNames("e-content article-prose mt-12", uniqueClassName)}
      >
        {post.content}
      </div>
      {mentions.length > 0 && (
        <section className="grid grid-cols-12 lg:gap-x-10 py-12">
          <div className="col-start-1 col-end-13 lg:col-start-3 lg:col-end-11">
            <header className="mb-8 border-t border-accent pt-3">
              <h2 id="mentions-label" className="text-sm tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
                Mentions
              </h2>
            </header>
            <ul
              aria-labelledby="mentions-label"
              className="flex flex-col gap-8"
            >
              {mentions.map((mention, index) => (
                <li key={index}>
                  <Mention mention={mention} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section className="grid grid-cols-12 lg:gap-x-10 mt-6">
        <h2 id="other-articles-label" className="sr-only">
          Other articles
        </h2>
        <nav
          aria-labelledby="other-aticles-label"
          className="col-start-1 col-end-13 lg:col-start-3 lg:col-end-11 flex items-center justify-between gap-8 border-t border-neutral-200 dark:border-neutral-800 py-8"
        >
          {previous && (
            <div className="flex-1">
              <Link
                href={`/blog/${previous.frontmatter.slug}`}
                rel="prev"
                className="text-sm tracking-wide text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-2"
              >
                <span className="w-4 h-px bg-current inline-block" />
                Previous
              </Link>
            </div>
          )}
          {next && (
            <div className="flex-1 text-right">
              <Link
                href={`/blog/${next.frontmatter.slug}`}
                rel="next"
                className="text-sm tracking-wide text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors inline-flex items-center gap-2"
              >
                Next
                <span className="w-4 h-px bg-current inline-block" />
              </Link>
            </div>
          )}
        </nav>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
};

export default BlogPostPage;

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="inline">
      <h2 id="tags-label" className="sr-only">
        Article tags
      </h2>
      <ul className="inline" aria-labelledby="tags-tabel">
        {tags.map((tag, index) => (
          <li key={tag} className="inline text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
            {tag}
            {index < tags.length - 1 && <span aria-hidden="true">, </span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const generateMetadata = async (props: BlogPostPageProps) => {
  const params = await props.params;
  const { frontmatter, imageUrls } = await getPostData(params.slug);

  const firstImage = imageUrls[0];
  const firstImageDark = firstImage
    ? firstImage.replace("/assets/illustrations", "/assets/dark-illustrations")
    : undefined;

  return {
    title: `${frontmatter.title} | Jonathan Harrell`,
    description: frontmatter.description,
    author: [
      { name: "Jonathan Harrell", url: "https://www.jonathanharrell.com" },
    ],
    creator: "Jonathan Harrell",
    publisher: "Jonathan Harrell",
    openGraph: {
      images: [firstImageDark ?? "/assets/seo/og.png"],
    },
  };
};

export const generateStaticParams = async () => {
  const slugs = await getPostSlugs();

  return slugs.map(({ slug }) => ({
    slug,
  }));
};
