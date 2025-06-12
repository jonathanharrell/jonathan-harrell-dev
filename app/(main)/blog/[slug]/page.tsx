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
    url: `${SITE_URL}blog/${slug}`,
    "inLanguage ": "en-US",
    image: `${SITE_URL}assets/seo/og.png`,
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
      `https://webmention.io/api/mentions.jf2?target=${SITE_URL}blog/${slug}`,
    );
    const data = await response.json();
    mentions = data.children;
  } catch (error) {
    Sentry.captureException(error);
  }

  return (
    <article className="h-entry">
      <header>
        <div className="mt-1 text-neutral-500 dark:text-neutral-400 text-lg">
          <time dateTime={post.frontmatter.date} className="dt-published">
            {formattedDate}
          </time>
          {Boolean(post.frontmatter.tags.length) && (
            <>
              <span aria-hidden="true" className="mx-2">
                •
              </span>
              <Tags tags={post.frontmatter.tags} />
            </>
          )}
        </div>
        <h1 className="p-name max-w-[32ch] mt-2 text-4xl md:text-5xl text-balance">
          {post.frontmatter.title}
        </h1>
      </header>
      <div
        className={classNames("e-content article-prose mt-12", uniqueClassName)}
      >
        {post.content}
      </div>
      {mentions.length > 0 && (
        <section className="py-6 sm:py-10">
          <header className="flex flex-col gap-4">
            <h2 id="mentions-label" className="text-3xl italic">
              Mentions
            </h2>
          </header>
          <hr
            role="presentation"
            className="my-6 border-neutral-200 dark:border-neutral-800 border-dashed"
          />
          <ul aria-labelledby="mentions-label" className="flex flex-col gap-8">
            {mentions.map((mention, index) => (
              <li key={index}>
                <Mention mention={mention} />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section className="mt-6 sm:mt-10 py-6 border-t border-neutral-200 dark:border-neutral-800 border-dashed">
        <h2 id="other-articles-label" className="sr-only">
          Other articles
        </h2>
        <nav
          aria-labelledby="other-aticles-label"
          className="flex flex-col sm:flex-row items-center md:justify-between gap-8 text-center"
        >
          {next && (
            <div className="flex-1 sm:text-left">
              <span className="text-neutral-500 dark:text-neutral-400">
                Newer article
              </span>
              <Link
                href={`/blog/${next.frontmatter.slug}`}
                rel="next"
                className="flex items-center gap-1.5 md:text-lg underline-offset-2 hover:underline"
              >
                <ArrowLeft size={16} />
                {next.frontmatter.title}
              </Link>
            </div>
          )}
          {previous && (
            <div className="flex-1 sm:ml-auto sm:text-right">
              <span className="text-neutral-500 dark:text-neutral-400">
                Older article
              </span>
              <Link
                href={`/blog/${previous.frontmatter.slug}`}
                rel="prev"
                className="flex items-center md:justify-end gap-1.5 md:text-lg underline-offset-2 hover:underline"
              >
                {previous.frontmatter.title}
                <ArrowRight size={16} />
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
          <li key={tag} className="inline">
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
  const firstImageDark = firstImage.replace(
    "/assets/illustrations",
    "/assets/dark-illustrations",
  );

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
