---
title: "Custom styles in Tailwind CSS: `@apply`, `theme` or custom plugins"
pubDate: 2022-09-11
permalink: "daily/2022/09/11/custom-styles-tailwind-css-apply-theme-custom-plugins"
tags: ["tailwind-css"]
---

There are three ways to add custom styles to a Tailwind CSS project. As there have been [some recent tweets](https://twitter.com/adamwathan/status/1559250403547652097) around one of them - the `@apply` directive - I'd like to look at and give examples for each.

## What is `@apply`?

`@apply` is a PostCSS directive, provided by Tailwind, to allow re-using it's classes - either when extracting components or overriding third-party styles.

The CSS file is the same as if you were writing traditional CSS, but rather than adding declarations to a ruleset, you use the `@apply` directive and specify the Tailwind CSS class names that you want to apply.

For example:

```css
fieldset {
  @apply bg-primary-dark;
}
```

This is a simple example but it's easy to see how this could be used in ways that weren't intended and how edge-cases can be found.

Adam said in a another tweet:

> I estimate that we spend at least $10,000/month trying to debug extremely edge-case issues people run into by using `@apply` in weird ways.

## Using the `theme` function

As well as `@apply`, Tailwind also provides a `theme` function that you can use in your CSS file. This removes the abstraction of using the class names and adds the ability to retrieve values from the `theme` section of your tailwind.config.js file.

```css
fieldset {
  backgroundColor: theme('colors.primary.dark');
}
```

This seems to be the preferred approach over using `@apply`.

## Creating a custom plugin

The `theme` function is also available if you write a custom Tailwind CSS plugin:

```javascript
const plugin = require('tailwindcss/plugin')

plugin(({ addBase, theme }) => {
  addBase({
    fieldset: {
      backgroundColor: theme('colors.primary.dark'),
    }
  })
})
```

This is an approach that I've used for [generic, open-source plugins](https://github.com/opdavies?tab=repositories&q=%23tailwindcss-plugin) but for project-specific styling, I've mostly used `@apply` or the `theme` function.

That said, I like the modular architecture of having different custom plugins - especially if they're separated into their own files - and being able to easily toggle plugins by simply adding to or removing from the `plugins` array.

I usually don't write many custom styles in a Tailwind project but I think that I'll focus on using the `theme` function going forward, either in a stylesheet or a custom plugin.
