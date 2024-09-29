import { PostList } from "@/components/post-list";
import { Header } from "@/components/header";
import {getPosts} from "@/lib/get-posts";

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
          <PostList posts={posts} />
        </section>
      </main>
    </>
  );
}

export default BlogPage;