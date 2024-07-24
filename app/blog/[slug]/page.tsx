import "@/app/prism.css";
import { Nav } from "@/components/nav";
import { getPostData } from "@/lib/utils";

const BlogPostPage = async ({ params }) => {
  const post = await getPostData(params.slug);

  return (
    <div className="max-w-[700px] mx-auto py-6">
      <header className="flex items-center gap-8">
        <span>JH</span>
        <Nav/>
      </header>
      <article className="full-post mt-16 mb-16">
        <header className="mb-12">
          <time dateTime={post.frontmatter.date} className="block mb-3">
            {new Date(post.frontmatter.date).toLocaleDateString("default", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </time>
          <h1 className="mb-2 font-forza italic font-bold text-5xl text-balance tracking-tighter text-accent">
            {post.frontmatter.title}
          </h1>
          {Boolean(post.frontmatter.tags?.length) && (
            <ul className="flex gap-3 italic text-neutral-500">
              {post.frontmatter.tags.map(tag => (
                <li key={tag}>#{tag}</li>
              ))}
            </ul>
          )}
        </header>
        <div className="prose">{post.content}</div>
        <footer className="mt-12">
          <p className="text-accent">• Finito</p>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;