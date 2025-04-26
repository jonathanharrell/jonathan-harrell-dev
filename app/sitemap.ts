import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";
import { getPostSlugs } from "@/lib/get-post-slugs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postSlugs = await getPostSlugs();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postSlugs.map(({ slug, lastModified }) => ({
      url: `${SITE_URL}blog/${slug}`,
      lastModified,
      changeFrequency:
        "never" as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
