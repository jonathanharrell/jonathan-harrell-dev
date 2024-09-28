import { getPosts } from "@/lib/utils";
import { PostsList } from "@/components/posts-list";
import { Header } from "@/components/header";
import { Link } from "next-view-transitions";

const HomePage = async () => {
  const { posts } = await getPosts();

  return (
    <>
      <Header title="Jonathan Harrell" subtitle="Frontend Engineer">
        <nav className="mt-12">
          <ul className="flex gap-5 [&_li_a]:text-neutral-400 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200 [&_li_a]:dark:decoration-neutral-700">
            <li><Link href="/blog">Articles</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/uses">Uses</Link></li>
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/experiments">Experiments</Link></li>
          </ul>
        </nav>
      </Header>
      <main>
        {Boolean(posts.length) && (
          <section className="mt-12">
            <PostsList posts={posts} />
          </section>
        )}
      </main>
    </>
  );
};

export default HomePage;