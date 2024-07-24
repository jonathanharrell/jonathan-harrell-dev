import type { Config } from "tailwindcss";
import TailwindTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "mercury": ["Mercury", "serif"],
      "ideal-sans": ["Ideal Sans", "sans-serif"],
      "sentinel": ["Sentinel", "sans-serif"],
      "operator": ["Operator", "monospace"],
      "operator-mono": ["Operator Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [
    TailwindTypography,
    plugin(function ({addVariant}) {
      addVariant('prose-inline-code', '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))');
    })
  ],
};

export default config;
