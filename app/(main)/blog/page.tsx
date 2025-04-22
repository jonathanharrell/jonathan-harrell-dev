import {Link} from "next-view-transitions";
import classNames from "classnames";
import {getPosts} from "@/lib/get-posts";
import {HeaderAnimation} from "@/components/header-animation";

const BlogPage = async () => {
  const {posts} = await getPosts();

  return (
    <main>
      <div className="py-12">
        {/*<HeaderAnimation*/}
        {/*  className="hidden lg:block absolute lg:-top-[400px] xl:-top-[50px] left-1/2 mt-[100px] -ml-[200px] w-[800px] h-[800px] -translate-x-full"/>*/}
        <div>
          <header className="flex items-center justify-between gap-4">
            <h1>Jonathan Harrell</h1>
            <p>Blog / About / Work</p>
          </header>
          <section className="my-20">
            <p className="max-w-[400px] text-5xl mb-6">UI/UX Designer & Front-End Engineer</p>
            <p className="max-w-[500px] text-xl mb-6">I’m a designer and developer committed to making the web a more empowering and
              accessible place. I create
              engaging user experiences and bring them to life through maintainable, high-quality code.</p>
            <p>Learn more</p>
          </section>
          <section className="my-20">
            <header className="flex items-center justify-between gap-4">
              <h2 className="text-3xl italic">Recent articles</h2>
              <p className="text-accent">View all</p>
            </header>
            <hr className="my-6 border-neutral-800 border-dashed" />
            <div className="grid grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index}>
                  {/*<Link*/}
                  {/*  href={`/blog/${post.frontmatter.slug}`}>*/}
                  {/*  {post.frontmatter.thumbnail ? (*/}
                  {/*    <img src={post.frontmatter.thumbnail} alt="" className="aspect-square image-cover bg-neutral-950"/>*/}
                  {/*  ) : (*/}
                  {/*    <div className="aspect-square bg-neutral-950"/>*/}
                  {/*  )}*/}
                  {/*</Link>*/}
                  <p className="text-4xl text-neutral-500 mb-1">{('0' + (posts.length - index)).slice(-2)}</p>
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
        </div>
      </div>
    </main>
  );
};

export default BlogPage;