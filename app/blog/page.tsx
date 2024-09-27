import { getPosts } from "@/lib/utils";
import { PostsList } from "@/components/posts-list";
import { Header } from "@/components/header";

const BlogPage = async () => {
  const { posts } = await getPosts();

  return (
    <>
      <Header title="Articles" />
      <main className="space-y-12">
        <section>
          filters/search
        </section>
        <section>
          <PostsList posts={posts} />
        </section>
      </main>
    </>
  );
}

export default BlogPage;