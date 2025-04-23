import { Link } from "next-view-transitions";
import {getPosts} from "@/lib/get-posts";
import {HeaderAnimation} from "@/components/header-animation";

const HomePage = async () => {
  const { posts } = await getPosts();

  const recentPosts = posts.slice(0, 6);

  return (
    <>
      <section className="relative my-20">
        <HeaderAnimation
          className="hidden lg:block absolute top-[-300px] right-[50px] w-[700px] h-[700px]"/>
        <h1 className="max-w-[400px] text-5xl mb-6">UI/UX Designer & Front-End Engineer</h1>
        <p className="max-w-[500px] text-xl mb-6">I’m a designer and developer committed to making the web a more
          empowering and
          accessible place. I create
          engaging user experiences and bring them to life through maintainable, high-quality code.</p>
        <p>
          <Link href="/about" className="text-accent hover:underline underline-offset-2">Learn more</Link>
        </p>
      </section>
      <section className="my-20">
        <header className="flex items-baseline justify-between gap-4">
          <h2 className="text-3xl italic">Recent articles</h2>
          <Link href="/blog" className="text-accent hover:underline underline-offset-2">View all</Link>
        </header>
        <hr className="mt-6 mb-12 border-neutral-800 border-dashed"/>
        <div className="grid grid-cols-3 gap-8">
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