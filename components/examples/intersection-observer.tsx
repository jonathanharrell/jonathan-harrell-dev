"use client";

import {useEffect} from "react";

export const IntersectionObserverExample = () => {
  useEffect(() => {
    const options = {
      root: document.querySelector(".example-wrapper"),
      rootMargin: '-20px',
      threshold: [0, 1]
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const target = entry.target as HTMLDivElement;

        switch (true) {
          case (ratio === 1):
            target.style.opacity = "1";
            target.style.transform = "scale(1.25)";
            return;
          case (ratio < 0.5):
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
    <div className="example-wrapper max-h-[340px] md:max-h-[400px] overflow-y-auto p-12 sm:p-16 bg-neutral-100 dark:bg-neutral-800">
      <section className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-12">
        {Array.from({length: 32}).map((_, index) => (
          <div
            key={index}
            className="card w-full aspect-square rounded-xl shadow-lg bg-white dark:bg-neutral-400 transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          />
        ))}
      </section>
    </div>
  );
};
