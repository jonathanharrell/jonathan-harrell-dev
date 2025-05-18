export const SemanticImageExample = () => {
  return (
    <figure>
      <div className="flex items-center justify-center p-12 sm:p-16 bg-neutral-100 dark:bg-neutral-950">
        <article className="not-article-prose group w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-900 hover:border-accent hover:bg-accent transition-colors">
          <figure className="relative">
            <img
              src="/assets/images/chair.jpg"
              alt="Image of a chair"
              className="object-cover group-hover:mix-blend-multiply group-hover:filter group-hover:blur transition-all"
            />
            <figcaption className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <h2 className="text-xl sm:text-2xl text-white font-bold">
                <a
                  href=""
                  className="flex items-center justify-center absolute inset-0"
                >
                  Article Title
                </a>
              </h2>
            </figcaption>
          </figure>
        </article>
      </div>
      <figcaption>Hover over the image to see the effect</figcaption>
    </figure>
  );
};
