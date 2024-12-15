import {Link} from "next-view-transitions";
import classNames from "classnames";
import {getPosts} from "@/lib/get-posts";
import {HeaderAnimation} from "@/components/header-animation";

const BlogPage = async () => {
  const {posts} = await getPosts();

  return (
    <main>
      <div className="py-12">
        <HeaderAnimation className="absolute top-0 left-1/2 -mt-[400px] -ml-[200px] w-[800px] h-[800px] -translate-x-full" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 sm:gap-x-5">
          <div
            className="col-start-1 col-end-3 md:col-end-4 lg:col-end-5 xl:col-end-6 grid grid-cols-subgrid gap-y-6">
            <p
              className="col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-5 text-lg">National
              Film Theatre of Australia</p>
            <h1
              className="col-start-1 col-end-3 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-5 xl:col-end-6 text-5xl sm:text-6xl md:text-8xl xl:text-9xl md:text-right">Jonathan
              Harrell</h1>
            <p
              className="col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-5 text-2xl xl:text-3xl italic">UI/UX
              Designer & Front-End Engineer</p>
            <p
              className="col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-5 text-xl">I’m
              a designer and developer committed to making the web a more empowering and accessible place. I create
              engaging user experiences and bring them to life through maintainable, high-quality code. I share what
              I’ve learned on this blog.</p>
          </div>
          <div
            className="col-start-1 col-end-3 md:col-end-4 lg:col-end-5 xl:col-end-6 grid grid-cols-subgrid gap-y-8 md:gap-y-6">
            {posts.map((post, index) => (
              <figure key={index}
                      className={classNames("flex flex-col gap-4 col-span-2 sm:col-span-1", index === 0 ? "sm:col-start-1 xl:col-start-3" : "")}>
                <Link
                  href={`/blog/${post.frontmatter.slug}`}>
                  {post.frontmatter.thumbnail ? (
                    <img src={post.frontmatter.thumbnail} alt="" className="aspect-square image-cover bg-neutral-950" />
                  ) : (
                    <div className="aspect-square bg-neutral-950"/>
                  )}
                </Link>
                <figcaption className="flex flex-col gap-2">
                  <h2 className="text-xl sm:text-xl md:text-lg 2xl:text-xl !leading-snug">
                    <Link href={`/blog/${post.frontmatter.slug}`}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="text-lg sm:text-base text-neutral-500">{post.frontmatter.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;