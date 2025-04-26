import path from "path";
import fs from "fs";

export const getPostSlugs = async (): Promise<
  { slug: string; lastModified: Date }[]
> => {
  const directoryPath = path.resolve(".", "content/posts");
  const filePaths = fs.readdirSync(directoryPath);

  return filePaths.map((file) => {
    const fullPath = path.resolve(".", "content/posts/", file);
    const stat = fs.statSync(fullPath);

    return {
      slug: file.replace(".mdx", ""),
      lastModified: stat.mtime,
    };
  });
};
