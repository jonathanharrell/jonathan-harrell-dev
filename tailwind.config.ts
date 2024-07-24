import type { Config } from "tailwindcss";
import TailwindTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      "ideal-sans": ["Ideal Sans", "sans-serif"],
      "sentinel": ["Sentinel", "sans-serif"],
      "forza": ["ForzaA", "ForzaB", "sans-serif"],
      "operator": ["Operator", "monospace"],
      "operator-mono": ["Operator Mono", "monospace"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      }
    },
    extend: {
      colors: {
        accent: "#e6594c"
      }
    },
  },
  plugins: [
    TailwindTypography,
    plugin(function ({addVariant}) {
      addVariant('prose-inline-code', '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))');
    })
  ],
};

export default config;
