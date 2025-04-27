import NextMdx from "@next/mdx";
import rehypePrism from "@mapbox/rehype-prism";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import("next").NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/tags",
        destination: "/blog",
        permanent: false,
      },
      {
        source: "/tags/:tag",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};

const withMdx = NextMdx({
  options: {
    rehypePlugins: [rehypePrism],
  },
});

export default withSentryConfig(withMdx(nextConfig), {
  org: "jonathan-harrell",
  project: "jonathanharrell-dev",
  silent: !process.env.CI,
  disableLogger: true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
});
