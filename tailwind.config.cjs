const colors = require("./assets/tailwindcss/colours.cjs");
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = defaultTheme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "media",
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
    require("./assets/tailwindcss/plugins/focus-visible.cjs"),
    require("@tailwindcss/nesting"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
