import Link from "next/link";
import {getPosts} from "@/lib/get-posts";

const BlogPage = async () => {
  const {posts} = await getPosts();

  return (
    <>
      <header className="py-10">
        <h1 className="text-4xl md:text-5xl">Articles</h1>
      </header>
      <section className="py-10">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <li key={index}>
              <article>
                <p aria-hidden="true" className="text-4xl text-neutral-600 mb-1">{("0" + (posts.length - index)).slice(-2)}</p>
                <h2 className="text-xl mb-2">
                  <Link href={`/blog/${post.frontmatter.slug}`}
                        className="hover:underline decoration-1 underline-offset-2">
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-lg text-neutral-400">{post.frontmatter.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default BlogPage;