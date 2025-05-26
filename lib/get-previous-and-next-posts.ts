import { getPosts } from "@/lib/get-posts";
import { PostData } from "@/lib/get-post-data";

export const getPreviousAndNextPosts = async (
  slug: string,
): Promise<{
  previous?: PostData;
  next?: PostData;
}> => {
  const { posts } = await getPosts();

  const matchingIndex = posts.findIndex(
    (post) => post.frontmatter.slug === slug,
  );
  const previous = posts[matchingIndex + 1];
  const next = posts[matchingIndex - 1];

  return {
    previous,
    next,
  };
};
