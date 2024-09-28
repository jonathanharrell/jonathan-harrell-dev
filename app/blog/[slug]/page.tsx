import "@/app/prism.css";
import { getPostData } from "@/lib/utils";
import { HeaderAnimation } from "@/components/header-animation";
import { Header } from "@/components/header";

interface BlogPostPageProps {
  params: {
    slug: string;
  }
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = await getPostData(params.slug);
console.log(post);
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
        <article className="prose dark:prose-invert max-w-none">
          {post.content}
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;