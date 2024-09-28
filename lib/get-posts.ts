import path from "path";
import fs from "fs";
import {POSTS_PER_PAGE} from "@/constants";
import {getPostData, PostData} from "@/lib/get-post-data";

interface PostPagination {
  currentPage: number;
  totalPages: number;
}

interface Posts {
  posts: PostData[];
  pagination: PostPagination;
}

export const getPosts = async ({page}: { page?: number } = {}): Promise<Posts> => {
  const directoryPath = path.resolve(".", "content/posts");
  const files = fs.readdirSync(directoryPath);

  const filePromises = files.map(async (file) => {
    const mdx = await getPostData(file.replace(".mdx", ""));

    return {
      ...mdx,
      frontmatter: {
        ...mdx.frontmatter,
        slug: file.replace(".mdx", "")
      }
    };
  });

  const posts = await Promise.all(filePromises);
  const descendingPosts = posts.sort((a, b) => {
    const aDate = new Date(a.frontmatter.date).getTime();
    const bDate = new Date(b.frontmatter.date).getTime();

    if (aDate < bDate) return 1;
    if (aDate > bDate) return -1;
    return 0;
  });

  const skip = page ? page * POSTS_PER_PAGE : 0;
  const paginatedPosts = page !== undefined ? descendingPosts.slice(skip, skip + POSTS_PER_PAGE) : descendingPosts;
  const pagination = {
    currentPage: page || 0,
    totalPages: Math.ceil(files.length / POSTS_PER_PAGE),
  };

  return {
    posts: paginatedPosts,
    pagination,
  };
};