import path from "path";
import fs from "fs";

export const getPostSlugs = async (): Promise<string[]> => {
  const directoryPath = path.resolve(".", "content/posts");
  return fs.readdirSync(directoryPath);
};
