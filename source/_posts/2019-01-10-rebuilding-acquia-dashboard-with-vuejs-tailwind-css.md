---
title: Rebuilding Acquia’s Dashboard with Vue.js and Tailwind CSS
excerpt: How I rebuilt Acquia’s dashboard using Vue.js and Tailwind CSS.
tags:
    - drupal
    - tailwind-css
    - tweet
    - vuejs
draft: true
---
After [rebuilding Drupal’s Bartik theme](/blog/rebuilding-bartik-with-vuejs-tailwind-css), I’ve now used [Vue.js][vue] and [Tailwind CSS][tailwind] to rebuild another Drupal related UI - this time it’s [Acquia’s](https://www.acquia.com) web hosting dashboard. Again, you can [view the site on Netlify][netlify] and [the code on GitHub][github].

## Why?

The same as the Bartik rebuild, this was a good opportunity for me to learn more about different technologies

vue router

## The applications page

<figure>
  <img src="/images/blog/rebuilding-acquia-vue-tailwind/1-applications.png" alt="A screenshot of the rebuilt Applications page." class="border border-grey-light p-2">
  <figcaption>The rebuilt Applications page.</figcaption>
</figure>

## The environments page

<figure>
  <img src="/images/blog/rebuilding-acquia-vue-tailwind/2-environments.png" alt="A screenshot of the rebuilt Environments page." class="border border-grey-light p-2">
  <figcaption>The rebuilt Environments page for an application.</figcaption>
</figure>

## An environment page

<figure>
  <img src="/images/blog/rebuilding-acquia-vue-tailwind/3-environment.png" alt="A screenshot of the rebuilt page for an environment within an application." class="border border-grey-light p-2">
  <figcaption>The rebuilt page for an environment within an application.</figcaption>
</figure>

[github]: https://github.com/opdavies/rebuilding-acquia
[netlify]: https://rebuilding-acquia.netlify.com
[tailwind]: https://tailwindcss.com
[vue]: https://vuejs.org
