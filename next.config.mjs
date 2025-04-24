import NextMdx from "@next/mdx";
import rehypePrism from "@mapbox/rehype-prism";

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    viewTransition: true,
  },
};

const withMdx = NextMdx({
  options: {
    rehypePlugins: [rehypePrism],
  },
});

export default withMdx(nextConfig);
