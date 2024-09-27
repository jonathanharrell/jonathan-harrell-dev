import { Link } from "next-view-transitions";

export const PostsList = ({ posts }) => {
  return (
    <ul className="space-y-8">
      {posts.map(post => (
        <li key={post.frontmatter.slug}>
          <article>
            <h3>
              <Link href={`/blog/${post.frontmatter.slug}`} className="font-medium underline underline-offset-2 decoration-neutral-200">
                {post.frontmatter.title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </time>
              {` · `}
              <span>{post.frontmatter.tags.join(", ")}</span>
            </p>
            <p className="max-w-[60ch] mt-2">{post.frontmatter.description}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}