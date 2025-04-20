import {getPostData} from "@/lib/get-post-data";
import "@/app/(main)/prism.css";
import classNames from "classnames";
import slugify from "slugify";

interface BlogPostPageProps {
  params: {
    slug: string;
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = await getPostData(params.slug);

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const subtitle = `${formattedDate} · ${post.frontmatter.tags.join(", ")}`

  return (
    <div className="max-w-[1100px] mx-auto py-24">
      <header className="relative mb-12">
        <p className="mt-1 dark:text-neutral-400 text-lg">{subtitle}</p>
        <h1 className="max-w-[32ch] mt-2 text-5xl text-balance">{post.frontmatter.title}</h1>
      </header>
      <main>
        <article className={classNames("article-body", slugify(post.frontmatter.title, { lower: true }))}>
          {post.content}
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;