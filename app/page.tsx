import { Link } from "next-view-transitions";
import { getPosts } from "@/lib/utils";
import { PostsList } from "@/components/posts-list";
import { HeaderAnimation } from "@/components/header-animation";

const HomePage = async () => {
  const { posts } = await getPosts();

  return (
    <div className="container max-w-3xl py-20">
      <div className="relative">
        <button className="absolute right-0">theme</button>
        <header>
          <HeaderAnimation className="w-16 h-16" style={{ viewTransitionName: "about-image" }} />
          <h1 className="mt-12 font-semibold">Jonathan Harrell</h1>
          <p className="mt-1 font-medium">Frontend Engineer</p>
          <nav className="mt-12">
            <ul className="flex gap-5 [&_li_a]:text-neutral-400 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200">
              <li><Link href="/blog">Articles</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/uses">Uses</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/experiments">Experiments</Link></li>
            </ul>
          </nav>
        </header>
        {Boolean(posts.length) && (
          <section className="mt-12">
            <PostsList posts={posts} />
          </section>
        )}
      </div>
    </div>
  );
};

export default HomePage;