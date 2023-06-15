import aspectRatioPlugin from "@tailwindcss/aspect-ratio";
import colors from "./assets/tailwindcss/colours.cjs";
import focusVisiblePlugin from "./assets/tailwindcss/plugins/focus-visible.cjs";
import formsPlugin from "@tailwindcss/forms";
import nestingPlugin from "@tailwindcss/nesting";
import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  important: true,
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    outline: {
      black: "1px solid black",
      white: "1px solid white",
    },
    extend: {
      colors,
      fontFamily: {
        sans: [
          "Roboto Condensed",
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Consolas",
          "Liberation Mono",
          ...fontFamily.mono,
        ],
      },
      spacing: {
        "2px": "2px",
      },
      borderWidth: {
        3: "3px",
      },
      width: {
        96: "24rem",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    aspectRatioPlugin,
    focusVisiblePlugin,
    formsPlugin,
    nestingPlugin,
    typographyPlugin,
  ],
} satisfies Config;

export default config;
