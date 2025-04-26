import path from "path";
import fs from "fs";
import { compileMDX, CompileMDXResult } from "next-mdx-remote/rsc";
import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import { HtmlElementNode } from "@jsdevtools/rehype-toc/lib/types";
import { Children } from "react";
import inlineSvg from "@/lib/inline-svg";
import { SemanticImageExample } from "@/examples/semantic-image";
import { IntersectionObserverExample } from "@/examples/intersection-observer";
import { FormInputExample } from "@/examples/form-input";
import {
  Autocomplete as AutocompleteExample,
  TagListSearch as TagListSearchExample,
} from "@/examples/search-select";
import { AccordionExample } from "@/examples/accordion-with-context";
import { Pluggable } from "unified";

type PostFrontMatter = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  thumbnail?: string;
};

export type PostData = CompileMDXResult<PostFrontMatter>;

export const getPostData = async (slug: string): Promise<PostData> => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return await compileMDX<PostFrontMatter>({
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
    },
  });
};
