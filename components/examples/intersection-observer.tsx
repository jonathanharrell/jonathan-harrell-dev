"use client";

import {useEffect} from "react";

export const IntersectionObserverExample = () => {
  useEffect(() => {
    const options = {
      root: document.querySelector(".example-wrapper"),
      rootMargin: '0px',
      threshold: [0, 1]
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const target = entry.target as HTMLDivElement;

        switch (true) {
          case (ratio === 1):
            target.style.opacity = "1";
            target.style.transform = "scale(1.1)";
            return;
          case (ratio < 0.99):
            target.style.opacity = "0.5";
            target.style.transform = "scale(1.0)";
            return;
          default:
            return;
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll('.card');
    targets.forEach(target => observer.observe(target));

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <figure>
      <div>
        <div className="example-wrapper not-article-body max-h-[340px] md:max-h-[400px] overflow-y-auto p-12 sm:p-16 bg-neutral-100 dark:bg-neutral-950">
          <section className="grid grid-cols-4 gap-6">
            {Array.from({length: 32}).map((_, index) => (
              <div
                key={index}
                className="card w-full aspect-square rounded-xl shadow-lg bg-white dark:bg-neutral-500 transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
              />
            ))}
          </section>
        </div>
      </div>
      <figcaption>
        You probably shouldn’t create as many observers on a production site as I have done. You start to run into performance issues. However, this experiment should help you visualize how the API works.
      </figcaption>
    </figure>
  );
};
