import { Header } from "@/components/header";
import {getPostData} from "@/lib/get-post-data";
import "@/app/(main)/prism.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = await getPostData(params.slug);

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const subtitle = `${formattedDate} · ${post.frontmatter.tags.join(", ")}`

  return (
    <>
      <Header title={post.frontmatter.title} subtitle={subtitle} />
      <main>
        <article className="prose prose-neutral dark:prose-invert prose-h2:text-base prose-h2:font-semibold prose-h3:text-base prose-h3:font-medium prose-strong:font-medium prose-a:underline prose-a:underline-offset-2 prose-a:decoration-neutral-200 prose-a:dark:decoration-neutral-600 prose-a:font-normal prose-code:before:content-none prose-code:after:content-none max-w-none">
          {post.content}
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;