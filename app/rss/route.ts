import { Feed } from "feed";
import { SITE_URL } from "@/constants";
import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { PostData, PostFrontMatter } from "@/lib/get-post-data";
import { getPostSlugs } from "@/lib/get-post-slugs";
import { SemanticImageExample } from "@/examples/semantic-image";
import { IntersectionObserverExample } from "@/examples/intersection-observer";
import { FormInputExample } from "@/examples/form-input";
import {
  Autocomplete as AutocompleteExample,
  TagListSearch as TagListSearchExample,
} from "@/examples/search-select";
import { AccordionExample } from "@/examples/accordion-with-context";
import { createElement, ReactNode } from "react";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";
import { Pluggable } from "unified";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import { HtmlElementNode } from "@jsdevtools/rehype-toc/lib/types";
import inlineSvg from "@/lib/inline-svg";

const currentYear = new Date().getFullYear();

const feed = new Feed({
  title: "Jonathan Harrell | Front-End Engineer RSS Feed",
  description:
    "Tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
  id: SITE_URL,
  link: `${SITE_URL}index.xml`,
  language: "en",
  copyright: `${currentYear}, by Jonathan Harrell`,
});

export async function GET() {
  const ReactDOMServer = (await import("react-dom/server")).default;

  const data = await getPostSlugs();

  const postPromises: Promise<PostData & { slug: string }>[] = data.map(
    async (item) => {
      const postData = await convertPostData(item.slug);

      return {
        ...postData,
        slug: item.slug,
      };
    },
  );

  const posts = await Promise.all(postPromises);

  posts.forEach((post) => {
    feed.addItem({
      title: `${post.frontmatter.title ?? ""}`,
      link: `${SITE_URL}blog/${post.slug}`,
      description: `${post.frontmatter.description ?? ""}`,
      date: new Date(post.frontmatter.date),
      content: replaceDynamicColors(
        ReactDOMServer.renderToStaticMarkup(post.content),
      ),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

const siteUrlWithoutTrailingSlash = SITE_URL.substring(0, SITE_URL.length - 1);

export const convertPostData = async (slug: string): Promise<PostData> => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return await compileMDX<PostFrontMatter>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [inlineSvg],
      },
    },
    components: {
      a: ({ children, href, ...props }) => {
        const augmentedHref = href.startsWith("/")
          ? `${siteUrlWithoutTrailingSlash}${href}`
          : href;

        return (
          <a {...props} href={augmentedHref} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
      img: ({ src, alt, title }) => {
        return (
          <figure>
            <img src={`${siteUrlWithoutTrailingSlash}${src}`} alt={alt} />
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      svg: ({ title, alt, ...props }) => {
        return (
          <figure>
            <svg
              {...props}
              aria-label={alt}
              style={{ width: "100%", height: "auto" }}
            />
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      SemanticImageExample: () => null,
      IntersectionObserverExample: () => null,
      FormInputExample: () => null,
      AutocompleteExample: () => null,
      TagListSearchExample: () => null,
      AccordionExample: () => null,
    },
  });
};

const replaceDynamicColors = (content: string) => {
  content = content.replaceAll("var(--illustration-background)", "#27272a");
  content = content.replaceAll("var(--illustration-black)", "#f5f5f5");
  content = content.replaceAll("var(--illustration-gray)", "#525252");
  content = content.replaceAll("var(--illustration-accent)", "#e6594c");

  return content;
};
