import { Link } from "next-view-transitions";
import {getPosts} from "@/lib/get-posts";
import {HeaderAnimation} from "@/components/header-animation";

const HomePage = async () => {
  const { posts } = await getPosts();

  const recentPosts = posts.slice(0, 6);

  return (
    <>
      <section className="relative py-10">
        <HeaderAnimation
          className="hidden lg:block absolute top-[-300px] right-[-50px] w-[700px] h-[700px]"/>
        <div className="flex flex-col gap-6">
          <h1 className="max-w-[400px] text-4xl md:text-5xl">UI/UX Designer & Front-End Engineer</h1>
          <p className="max-w-[500px] text-xl">I’m a designer and developer committed to making the web a more
            empowering and
            accessible place. I create
            engaging user experiences and bring them to life through maintainable, high-quality code.</p>
          <p>
            <Link href="/about" className="hover:underline underline-offset-2 text-accent">Learn more</Link>
          </p>
        </div>
      </section>
      <section className="py-10">
        <header className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl italic">Recent articles</h2>
          <Link href="/blog" className="text-accent hover:underline underline-offset-2">View all</Link>
        </header>
        <hr className="mt-6 mb-12 border-neutral-800 border-dashed"/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article key={index}>
              <h2 className="text-xl mb-2">
                <Link href={`/blog/${post.frontmatter.slug}`}
                      className="hover:underline decoration-1 underline-offset-2">
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="text-lg text-neutral-400">{post.frontmatter.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;