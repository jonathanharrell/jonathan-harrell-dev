import path from "path";
import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { Children } from "react";
import { POSTS_PER_PAGE } from "@/constants";
import rehypePrism from "@mapbox/rehype-prism";

export const getPostData = async (slug: string) => {
  const fullPath = path.resolve(".", "content/posts/", `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return await compileMDX<{ title: string; date: string; tags: string[] }>({
    source: fileContents,
    options: { parseFrontmatter: true, mdxOptions: { rehypePlugins: [rehypePrism] } },
    components: {
      p: ({ children, ...props }) => {
        try {
          if (Children.only(children)) {
            if (children.props.src) {
              return <div {...props}>{children}</div>;
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
            <img src={src} alt={alt}/>
            {title && <figcaption>{title}</figcaption>}
          </figure>
        );
      },
      Codepen: () => (
        <div>codepen</div>
      ),
      ArticleLink: () => (
        <div>article link</div>
      )
    }
  });
};

export const getPosts = async ({ page }: { page?: number } = {}) => {
  const directoryPath = path.resolve(".", "content/posts");
  const files = fs.readdirSync(directoryPath);

  const filePromises = files.map(async (file) => {
    const mdx = await getPostData(file.replace(".mdx", ""));

    return {
      ...mdx,
      frontmatter: {
        ...mdx.frontmatter,
        slug: file.replace(".mdx", "")
      }
    };
  });

  const posts = await Promise.all(filePromises);
  const descendingPosts = posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date).getTime();
    const bDate = new Date(b.frontmatter.date).getTime();

    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });

  const skip = page ? page * POSTS_PER_PAGE : 0;
  const paginatedPosts = page !== undefined ? descendingPosts.slice(skip, skip + POSTS_PER_PAGE) : descendingPosts;
  const pagination = {
    currentPage: page || 0,
    totalPages: Math.ceil(files.length / POSTS_PER_PAGE),
  };

  return {
    posts: paginatedPosts,
    pagination,
  };
};