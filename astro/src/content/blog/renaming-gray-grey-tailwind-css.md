---
title: Renaming gray to grey in Tailwind CSS
excerpt: How to change the colour "gray" to "grey" in Tailwind CSS.
tags:
    - tailwind-css
date: 2020-09-04
---

In `tailwind.config.js`:

```
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        // Remove the "gray" colours from the theme.
        gray: {},

        // Create a new set of "grey" colours, using the original "gray" values.
        grey: colors['gray']
      }
    },
  },
  variants: {},
  plugins: [],
};
```

Based on a configuration file from https://github.com/tailwindlabs/tailwindcss-playground.
