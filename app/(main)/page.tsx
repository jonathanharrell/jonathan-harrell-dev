import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/get-posts";

export const metadata: Metadata = {
  title:
    "Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Engineer",
  description:
    "Want to stay up-to-date on the latest developments in CSS and JavaScript? Get tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
  openGraph: {
    images: ["/assets/seo/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const HomePage = async () => {
  const { posts } = await getPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-col gap-2 mb-3">
          <span className="text-[10px] tracking-widest uppercase text-accent">
            01
          </span>
          <div
            className="font-gt-america font-normal leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-100"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            <span className="block">UI/UX Designer</span>
            <span className="block text-neutral-400 dark:text-neutral-600">
              & Front-End Engineer
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="max-w-[520px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            I&apos;m a designer and developer committed to making the web a more
            empowering and accessible place. I create engaging user experiences
            and bring them to life through maintainable, high-quality code.
          </p>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 text-sm tracking-wide text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors group"
          >
            Learn more
            <span className="w-6 h-px bg-current inline-block group-hover:w-10 transition-all duration-300" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 border-b border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[10px] tracking-widest uppercase text-accent">02</span>
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">Recent articles</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {recentPosts.map((post, i) => (
            <div
              key={post.frontmatter.slug}
              className={`flex flex-col gap-3 py-8 border-t border-neutral-200 dark:border-neutral-800 ${i < 2 ? "sm:pr-8 sm:border-r" : "sm:pl-8"} ${i === 1 ? "sm:px-8" : ""}`}
            >
              <span className="text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                {new Date(post.frontmatter.date).getFullYear()}
              </span>
              <Link
                href={`/blog/${post.frontmatter.slug}`}
                className="font-gt-america font-normal text-lg leading-snug tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {post.frontmatter.title}
              </Link>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-snug">
                {post.frontmatter.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Career summary */}
      <section className="py-16">
        <div className="flex flex-col gap-2 mb-8">
          <span className="text-[10px] tracking-widest uppercase text-accent">03</span>
          <p className="text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500">Career</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p
            className="font-gt-america font-normal leading-tight tracking-tight text-neutral-900 dark:text-neutral-100 max-w-[600px]"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}
          >
            Senior Frontend Engineer at Zapier, with 10+ years building products at the intersection of design and engineering.
          </p>
          <Link
            href="/about#work"
            className="shrink-0 inline-flex items-center gap-2 text-sm tracking-wide border-t border-accent pt-3 text-neutral-900 dark:text-neutral-100 hover:text-accent dark:hover:text-accent transition-colors group"
          >
            View work history
            <span className="w-6 h-px bg-current inline-block group-hover:w-10 transition-all duration-300" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
