import { getPosts } from "@/lib/utils";
import { PostsList } from "@/components/posts-list";
import { HeaderAnimation } from "@/components/header-animation";

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <div className="container max-w-3xl py-20">
      <div className="relative">
        <button className="absolute right-0">theme</button>
        <header>
          <HeaderAnimation className="w-16 h-16" style={{ viewTransitionName: "about-image" }} />
          <h1 className="mt-12 font-semibold">Articles</h1>
        </header>
        <section className="mt-12">
          filters/search
        </section>
        <section className="mt-12">
          <PostsList posts={posts} />
        </section>
      </div>
    </div>
  );
}

export default BlogPage;