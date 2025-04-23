import {Link} from "next-view-transitions";
import {PostData} from "@/lib/get-post-data";

interface PostListItemProps {
  post: PostData;
}

export const PostListItem = ({ post }: PostListItemProps) => {
  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <li key={post.frontmatter.slug}>
      <article>
        <h3>
          <Link
            href={`/blog/${post.frontmatter.slug}`}
            className="font-medium underline underline-offset-2 dark:decoration-neutral-700"
          >
            {post.frontmatter.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm dark:text-neutral-500">
          <time dateTime={post.frontmatter.date}>
            {formattedDate}
          </time>
          {` · `}
          <span>{post.frontmatter.tags.join(", ")}</span>
        </p>
        <p className="max-w-[60ch] mt-2 dark:text-neutral-400">
          {post.frontmatter.description}
        </p>
      </article>
    </li>
  );
}