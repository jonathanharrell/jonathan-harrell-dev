import { getPostData } from "@/lib/get-post-data";
import "@/styles/prism.css";
import classNames from "classnames";
import slugify from "slugify";
import { getPostSlugs } from "@/lib/get-post-slugs";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = await getPostData(slug);

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString(
    "default",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  const uniqueClassName = slugify(post.frontmatter.title, { lower: true });

  return (
    <article>
      <header>
        <div className="mt-1 dark:text-neutral-400 text-lg">
          <time dateTime={post.frontmatter.date}>{formattedDate}</time>
          {Boolean(post.frontmatter.tags.length) && (
            <>
              <span aria-hidden="true" className="mx-2">
                •
              </span>
              <Tags tags={post.frontmatter.tags} />
            </>
          )}
        </div>
        <h1 className="max-w-[32ch] mt-2 text-4xl md:text-5xl text-balance">
          {post.frontmatter.title}
        </h1>
      </header>
      <div className={classNames("article-prose mt-12", uniqueClassName)}>
        {post.content}
      </div>
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

export const generateStaticParams = async () => {
  const slugs = await getPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
};
