import Link from "next/link";
import { Nav } from "@/components/nav";
import { getPosts } from "@/lib/utils";

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <div className="max-w-[700px] mx-auto py-6">
      <header className="flex items-center gap-8">
        <span>JH</span>
        <Nav/>
      </header>
      <h1 className="my-12 font-forza font-bold text-3xl">Blog Archive</h1>
      {Boolean(posts.length) && (
        <ul className="flex flex-col gap-8 my-12">
          {posts.map(post => (
            <li key={post.frontmatter.slug}>
              <article className="grid grid-cols-6 gap-8">
                <time dateTime={post.frontmatter.date} className="col-span-2">
                  {new Date(post.frontmatter.date).toLocaleDateString("default", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </time>
                <div className="col-span-4">
                  <h2 className="font-forza font-bold italic text-2xl">
                    <Link href={`/blog/${post.frontmatter.slug}`} className="text-accent">
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="prose">
                    {post.frontmatter.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogPage;