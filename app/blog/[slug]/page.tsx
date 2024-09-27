import "@/app/prism.css";
import { getPostData } from "@/lib/utils";
import { HeaderAnimation } from "@/components/header-animation";

const BlogPostPage = async ({ params }) => {
  const post = await getPostData(params.slug);

  return (
    <div className="container max-w-3xl py-20">
      <div className="relative">
        <button className="absolute right-0">theme</button>
        <header>
          <HeaderAnimation className="w-16 h-16" style={{ viewTransitionName: "about-image" }} />
          <h1 className="mt-12 font-semibold">{post.frontmatter.title}</h1>
          <p className="mt-1">
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
        </header>
        <article className="prose max-w-none mt-12">
          {post.content}
        </article>
      </div>
    </div>
  )
};

export default BlogPostPage;