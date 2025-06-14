import path from "path";
import fs from "fs";
import { Children } from "react";
import { notFound } from "next/navigation";
import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import { Pluggable } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeToc from "@jsdevtools/rehype-toc";
import { HtmlElementNode } from "@jsdevtools/rehype-toc/lib/types";
import { extractImageUrlsFromMdx } from "@/lib/extract-image-urls-from-mdx";
import inlineSvg from "@/lib/inline-svg";
import { SemanticImageExample } from "@/examples/semantic-image";
import { IntersectionObserverExample } from "@/examples/intersection-observer";
import { FormInputExample } from "@/examples/form-input";
import {
  Autocomplete as AutocompleteExample,
  TagListSearch as TagListSearchExample,
} from "@/examples/search-select";
import { AccordionExample } from "@/examples/accordion-with-context";
import { LightDarkSvg } from "@/examples/light-dark-svg";

export type PostFrontMatter = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  thumbnail?: string;
};

export type PostData = CompileMDXResult<PostFrontMatter> & {
  imageUrls: string[];
};

export const getPostData = async (slug: string): Promise<PostData> => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  let fileContents;

  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (e) {
    notFound();
  }

  const imageUrls = await extractImageUrlsFromMdx(fileContents);

  const result = await compileMDX<PostFrontMatter>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypePrism as Pluggable,
          rehypeSlug,
          [
            rehypeToc,
            {
              headings: ["h2"],
              customizeTOC(toc: HtmlElementNode) {
                toc.properties["aria-label"] = "Table of contents";

                return {
                  type: "element",
                  tagName: "div",
                  properties: { className: "toc-wrapper" },
                  children: [toc],
                };
              },
            },
          ],
          inlineSvg,
        ],
      },
    },
    components: {
      p: ({ children, ...props }) => {
        try {
          if (Children.only(children)) {
            if (children.props.src || children.props.viewBox) {
              return children;
            }
          }
        } catch (e) {
          return <p {...props}>{children}</p>;
        }

        return <p {...props}>{children}</p>;
      },
      a: ({ children, href, ...props }) => {
        const isInternal = href.startsWith("/") || href.startsWith("#");

        return (
          <a
            {...props}
            href={href}
            target={!isInternal ? "_blank" : undefined}
            rel={!isInternal ? "noreferrer" : undefined}
          >
            {children}
          </a>
        );
      },
      img: ({ src, alt, title }) => {
        return (
          <figure>
            <img src={src} alt={alt} />
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      svg: ({ title, alt, ...props }) => {
        return (
          <figure>
            <svg {...props} aria-label={alt} />
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      // TODO: make lazy import
      SemanticImageExample,
      IntersectionObserverExample,
      FormInputExample,
      AutocompleteExample,
      TagListSearchExample,
      AccordionExample,
      LightDarkSvg,
    },
  });

  return {
    ...result,
    imageUrls,
  };
};
