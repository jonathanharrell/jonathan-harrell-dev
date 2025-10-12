import type { Config } from "tailwindcss";
import TailwindTypography from "@tailwindcss/typography";
import TailwindForms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";
import { PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./examples/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    fontFamily: {
      etbook: ["ETBook", "Palatino", "serif"],
      "etbook-lining-figures": [
        "ETBookLiningFigures",
        "ETBook",
        "Palatino",
        "serif",
      ],
      iowan: ["Iowan Old Style", "Palatino", "serif"],
      sans: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      "gt-america": ["Gt America", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    container: {
      screens: {
        sm: "604px",
        md: "768px",
        lg: "1024px",
        xl: "1100px",
        "2xl": "1200px",
      },
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
      },
    },
    extend: {
      colors: {
        accent: "var(--accent)",
      },
      typography: ({ theme }: PluginUtils) => ({
        neutral: {
          css: {
            "--tw-prose-body": theme("colors.neutral[800]"),
            "--tw-prose-headings": theme("colors.neutral[800]"),
            "--tw-prose-lead": theme("colors.neutral[700]"),
            "--tw-prose-links": theme("colors.neutral[800]"),
            "--tw-prose-bold": theme("colors.neutral[800]"),
            "--tw-prose-counters": theme("colors.neutral[600]"),
            "--tw-prose-bullets": theme("colors.neutral[400]"),
            "--tw-prose-hr": theme("colors.neutral[300]"),
            "--tw-prose-quotes": theme("colors.neutral[800]"),
            "--tw-prose-quote-borders": theme("colors.neutral[300]"),
            "--tw-prose-captions": theme("colors.neutral[500]"),
            "--tw-prose-code": theme("colors.neutral[800]"),
            "--tw-prose-pre-code": theme("colors.neutral[800]"),
            "--tw-prose-pre-bg": theme("colors.neutral[100]"),
            "--tw-prose-th-borders": theme("colors.neutral[300]"),
            "--tw-prose-td-borders": theme("colors.neutral[200]"),
            "--tw-prose-invert-body": theme("colors.neutral[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.neutral[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.neutral[400]"),
            "--tw-prose-invert-bullets": theme("colors.neutral[600]"),
            "--tw-prose-invert-hr": theme("colors.neutral[700]"),
            "--tw-prose-invert-quotes": theme("colors.neutral[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.neutral[700]"),
            "--tw-prose-invert-captions": theme("colors.neutral[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.neutral[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.neutral[600]"),
            "--tw-prose-invert-td-borders": theme("colors.neutral[700]"),
          },
        },
      }),
    },
  },
  plugins: [
    TailwindTypography,
    TailwindForms({
      strategy: "class",
    }),
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
    }),
  ],
};

export default config;
