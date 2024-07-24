import Link from "next/link";

const BlogPage = () => {
  return (
    <div>
      <p>blog page</p>
      <ul>
        <li>
          <Link href="/blog/contextual-callouts-with-css-grid">
            Contextual Callouts with CSS Grid
          </Link>
        </li>
        <li>
          <Link href="/blog/live-theming-with-css-variables">
            Live Theming with CSS Variables
          </Link>
        </li>
        <li>
          <Link href="/blog/semantic-image-overlays-with-object-fit">
            Semantic Image Overlays With Object-Fit
          </Link>
        </li>
        <li>
          <Link href="/blog/component-variants-with-scoped-css-variables">
            Component Variants with Scoped CSS Variables
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default BlogPage;