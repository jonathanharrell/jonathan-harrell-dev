import { Feed } from "feed";
import { SITE_URL } from "@/constants";
import { PostData } from "@/lib/get-post-data";
import { getPostSlugs } from "@/lib/get-post-slugs";
import { convertPostDataForRss } from "@/lib/convert-post-data-for-rss";

const currentYear = new Date().getFullYear();

const feed = new Feed({
  title: "Jonathan Harrell | Front-End Engineer RSS Feed",
  description:
    "Tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
  id: SITE_URL,
  link: `${SITE_URL}index.xml`,
  language: "en",
  copyright: `${currentYear}, by Jonathan Harrell`,
});

export async function GET() {
  const ReactDOMServer = (await import("react-dom/server")).default;

  const data = await getPostSlugs();

  const postPromises: Promise<
    Omit<PostData, "imageUrls"> & { slug: string }
  >[] = data.map(async (item) => {
    const postData = await convertPostDataForRss(item.slug);

    return {
      ...postData,
      slug: item.slug,
    };
  });

  const posts = await Promise.all(postPromises);

  posts.forEach((post) => {
    feed.addItem({
      title: `${post.frontmatter.title ?? ""}`,
      link: `${SITE_URL}blog/${post.slug}`,
      description: `${post.frontmatter.description ?? ""}`,
      date: new Date(post.frontmatter.date),
      content: replaceDynamicColors(
        ReactDOMServer.renderToStaticMarkup(post.content),
      ),
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

const replaceDynamicColors = (content: string) => {
  content = content.replaceAll("var(--illustration-background)", "#27272a");
  content = content.replaceAll("var(--illustration-black)", "#f5f5f5");
  content = content.replaceAll("var(--illustration-gray)", "#525252");
  content = content.replaceAll("var(--illustration-accent)", "#e6594c");

  return content;
};
