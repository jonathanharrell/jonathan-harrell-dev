"use client";

import useTheme from "@/hooks/use-theme";
import { Theme } from "@/providers/theme-provider";

export const LightDarkSvg = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <figure>
      <div>
        <div className="example-wrapper not-article-prose flex flex-col items-center justify-center gap-4 p-16 bg-neutral-100 dark:bg-neutral-925">
          <svg
            viewBox="0 0 600 480"
            width="600"
            height="480"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-full h-auto"
          >
            {/* Static orbit rings */}
            <circle cx="300" cy="240" r="55"  stroke="var(--illustration-gray)"   strokeWidth="1"   fill="none" />
            <circle cx="300" cy="240" r="110" stroke="var(--illustration-accent)" strokeWidth="1.5" fill="none" />
            <circle cx="300" cy="240" r="175" stroke="var(--illustration-black)"  strokeWidth="1"   fill="none" />
            <circle cx="300" cy="240" r="205" stroke="var(--illustration-accent)" strokeWidth="1"   fill="none" />

            {/* Center dot */}
            <circle cx="300" cy="240" r="5" fill="var(--illustration-accent)" />

            {/* Orbit 1 dots — clockwise, 8s */}
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 300 240" to="360 300 240" dur="8s" repeatCount="indefinite" />
              <circle cx="328" cy="192" r="3" fill="var(--illustration-gray)" />
              <circle cx="265" cy="282" r="4" fill="var(--illustration-accent)" />
            </g>

            {/* Orbit 2 dots + connection lines — counter-clockwise, 15s */}
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 300 240" to="-360 300 240" dur="15s" repeatCount="indefinite" />
              <line x1="300" y1="240" x2="403" y2="202" stroke="var(--illustration-accent)" strokeWidth="0.5" opacity="0.4" />
              <circle cx="403" cy="202" r="4" fill="var(--illustration-accent)" />
              <circle cx="229" cy="156" r="3" fill="var(--illustration-gray)" />
              <circle cx="210" cy="303" r="4" fill="var(--illustration-accent)" />
              <circle cx="378" cy="318" r="3" fill="var(--illustration-gray)" />
            </g>

            {/* Orbit 3 dots + connection line — clockwise, 24s */}
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 300 240" to="360 300 240" dur="24s" repeatCount="indefinite" />
              <line x1="300" y1="240" x2="131" y2="195" stroke="var(--illustration-accent)" strokeWidth="0.5" opacity="0.4" />
              <circle cx="345" cy="71"  r="3" fill="var(--illustration-gray)" />
              <circle cx="131" cy="195" r="4" fill="var(--illustration-accent)" />
              <circle cx="345" cy="409" r="3" fill="var(--illustration-gray)" />
            </g>

            {/* Orbit 4 dots + connection line — counter-clockwise, 36s */}
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 300 240" to="-360 300 240" dur="36s" repeatCount="indefinite" />
              <line x1="300" y1="240" x2="282" y2="36" stroke="var(--illustration-black)" strokeWidth="0.5" opacity="0.3" />
              <circle cx="502" cy="204" r="4" fill="var(--illustration-accent)" />
              <circle cx="282" cy="36"  r="3" fill="var(--illustration-black)" />
              <circle cx="95"  cy="240" r="3" fill="var(--illustration-black)" />
              <circle cx="247" cy="438" r="3" fill="var(--illustration-accent)" />
              <circle cx="493" cy="310" r="4" fill="var(--illustration-accent)" />
            </g>
          </svg>
        </div>
      </div>
      <figcaption>
        <button
          className="underline hover:no-underline cursor-pointer"
          onClick={toggleTheme}
        >
          Click here
        </button>{" "}
        to toggle the theme and watch the SVG dynamically adapt
      </figcaption>
    </figure>
  );
};
