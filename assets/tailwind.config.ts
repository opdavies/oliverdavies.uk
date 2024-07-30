import colours from "tailwindcss/colors";
import type { Config } from "tailwindcss";
import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from "@tailwindcss/typography";

export default {
  content: [
    "../app/config/**/*.yml",
    "../source/**/*.{md,twig}",
  ],
  theme: {
    colors: {
      black: "#000",
      blue: {
        primary: "#24608A",
        400: "#60a5fa",
      },
      current: "currentColor",
      grey: colours.stone,
      inherit: "inherit",
      transparent: "transparent",
      white: "#fff",
    },

    extend: {
      fontFamily: {
        sans: [
          "Roboto Condensed",
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
} satisfies Config;
