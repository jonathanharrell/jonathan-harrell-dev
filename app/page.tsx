import Link from "next/link";
import { Nav } from "@/components/nav";
import { getPosts } from "@/lib/utils";

const HomePage = async () => {
  const { posts } = await getPosts({ page: 0 });

  return (
    <div className="grid grid-cols-12 gap-16 py-12">
      <div className="col-span-4">
        <div className="w-24 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-6" />
        <h1 className="font-forza font-bold text-xl mb-3">Jonathan Harrell</h1>
        <p className="prose mb-4">
          Engineer at <a href="" className="underline">Zapier</a>.<br/>
          Previous: Engineer at <a href="" className="underline">Vowel</a>, engineer at <a href="" className="underline">InVision</a>, designer & developer at <a href="" className="underline">WHQ</a>
        </p>
        <ul className="flex gap-2">
          <li>
            <a href="" className="underline hover:no-underline text-accent">Twitter</a>
          </li>
          <li>
            <a href="" className="underline hover:no-underline text-accent">Github</a>
          </li>
          <li>
            <a href="" className="underline hover:no-underline text-accent">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div className="col-span-8">
        <Nav />
        {/*<section className="my-12">*/}
        {/*  <header className="mb-8">*/}
        {/*    <h2 className="font-forza font-bold text-3xl mb-3">Snippets</h2>*/}
        {/*    <p className="prose">A collection of code examples.</p>*/}
        {/*  </header>*/}
        {/*  <ul className="space-y-1">*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*    <li className="flex justify-between">*/}
        {/*      <span>Category 1 <span className="text-neutral-400">/</span> <a href="" className="text-accent">Snippet 1</a></span>*/}
        {/*      <span className="text-sm text-neutral-500">July 24, 2024</span>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</section>*/}
        <section className="my-12">
          <h2 className="font-forza font-bold text-3xl mb-8">Recent Articles</h2>
          {Boolean(posts.length) && (
            <ul className="space-y-8">
              {posts.map(post => (
                <li key={post.frontmatter.slug}>
                  <article>
                    <header className="mb-3">
                      <h3 className="font-forza font-bold italic text-2xl">
                        <Link href={`/blog/${post.frontmatter.slug}`} className="text-accent">
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <time dateTime={post.frontmatter.date} className="text-sm text-neutral-500">
                        {new Date(post.frontmatter.date).toLocaleDateString("default", {
                          month: "long",
                          day: "numeric",
                          year: "numeric"
                        })}
                      </time>
                    </header>
                    <p className="prose">
                      {post.frontmatter.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default HomePage;