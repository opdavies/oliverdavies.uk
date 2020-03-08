---
title: Developing this Website (WIP)
---

This site is built with [Sculpin][], a static site generator written in PHP,
that generates a static HTML website from Markdown files and Twig templates. You
can see the [source code on GitHub].

## Extending Sculpin

- Custom Twig extensions
- https://github.com/opdavies/sculpin-twig-markdown-bundle
- https://github.com/opdavies/sculpin-gist-embed-bundle
- https://github.com/opdavies/sculpin-content-generator-bundle

## Front End

On the front-end, I have used [PostCSS][] rather than Sass or Less, and
[Tailwind CSS] for all of the styling, and some [Vue.js][] for the navbar and
toggling the navigation menu on mobile. These are compiled with [Webpack
Encore][] - a wrapper around Webpack, provided by Symfony.

[postcss]: https://postcss.org
[sculpin]: https://sculpin.io
[source code on github]: https://github.com/opdavies/oliverdavies.uk
[tailwind css]: https://tailwindcss.com
[vue.js]: https://vuejs.org
[webpack encore]: https://github.com/symfony/webpack-encore
