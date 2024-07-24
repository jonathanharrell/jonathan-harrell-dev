import NextMdx from '@next/mdx';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMdx = NextMdx({
  options: {
    rehypePlugins: [rehypePrism],
  },
});

export default withMdx(nextConfig);
