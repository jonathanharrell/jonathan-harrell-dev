import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PostData, PostFrontMatter } from "@/lib/get-post-data";
import inlineSvg from "@/lib/inline-svg";
import { SITE_URL } from "@/constants";

export const convertPostDataForRss = async (
  slug: string,
): Promise<Omit<PostData, "imageUrls">> => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return await compileMDX<PostFrontMatter>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [inlineSvg],
      },
    },
    components: {
      a: ({ children, href, ...props }) => {
        const augmentedHref = href.startsWith("/")
          ? `${SITE_URL}${href}`
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
            <img src={`${SITE_URL}${src}`} alt={alt} />
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
      LightDarkSvg: () => null,
    },
  });
};
