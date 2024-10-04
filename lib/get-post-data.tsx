import path from "path";
import fs from "fs";
import {compileMDX, CompileMDXResult} from "next-mdx-remote/rsc";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import {HtmlElementNode} from "@jsdevtools/rehype-toc/lib/types";
import {Children} from "react";
import inlineSvg from "@/lib/inline-svg";
import {SemanticImageExample} from "@/components/examples/semantic-image";
import {IntersectionObserverExample} from "@/components/examples/intersection-observer";
import {FormInputExample} from "@/components/examples/form-input";

type PostFrontMatter = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
}

export type PostData = CompileMDXResult<PostFrontMatter>;

export const getPostData = async (slug: string): Promise<PostData> => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return await compileMDX<PostFrontMatter>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypePrism, rehypeSlug, [
          rehypeToc, {
            headings: ["h2"],
            customizeTOC(toc: HtmlElementNode) {
              return {
                type: "element",
                tagName: "details",
                // properties: { className: 'toc' },
                children: [
                  {
                    type: "element",
                    tagName: "summary",
                    properties: {className: "dark:text-neutral-400 cursor-pointer"},
                    children: [
                      {
                        type: "text",
                        value: "Table of Contents"
                      }
                    ]
                  },
                  toc
                ]
              };
            }
          }],
          inlineSvg,
        ]
      }
    },
    components: {
      p: ({children, ...props}) => {
        try {
          if (Children.only(children)) {
            if (children.props.src || children.props.viewBox) {
              return <div {...props}>{children}</div>;
            }
          }
        } catch (e) {
          return <p {...props}>{children}</p>;
        }

        return <p {...props}>{children}</p>;
      },
      img: ({src, alt, title}) => {
        return (
          <figure>
            <img src={src} alt={alt}/>
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      svg: ({title, ...props}) => {
        return (
          <figure>
            <svg {...props} />
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      Codepen: () => (
        <div>codepen</div>
      ),
      ArticleLink: () => (
        <div>article link</div>
      ),
      // TODO: make lazy import
      SemanticImageExample,
      IntersectionObserverExample,
      FormInputExample,
    }
  });
};