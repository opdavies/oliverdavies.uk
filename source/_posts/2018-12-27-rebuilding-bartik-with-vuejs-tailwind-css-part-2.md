---
title: Rebuilding Bartik (Drupal’s Default Theme) with Vue.js and Tailwind CSS - part 2
tags:
    - drupal
    - tailwind-css
    - tweet
    - vuejs
has_tweets: true
draft: true
---
{% block excerpt %}
In the [original post](/blog/rebuilding-bartik-with-vuejs-tailwind-css) I detailed how I built a clone of Drupal’s Bartik theme with [Vue.js][1] and [Tailwind CSS][2]. This post details some updates that I’ve made to it since then.
{% endblock %}

{% block content %}
## Customising Tailwind

### Colours

```js
let colors = {
  'transparent': 'transparent',

  'black': '#22292f',
  'grey-darkest': '#3d4852',
  'grey-dark': '#8795a1',
  'grey': '#b8c2cc',
  'grey-light': '#dae1e7',
  'grey-lighter': '#f0f0f0',
  'grey-lightest': '#F6F6F2',
  'white': '#ffffff',

  'black-60': 'rgba(0, 0, 0, .6)',

  'blue-dark': '#2779bd',
  'blue': '#3490dc',
  'blue-light': '#bcdefa',
}
```

### Plugins

```js
plugins: [
  require('tailwindcss/plugins/container')({
    // center: true,
    // padding: '1rem',
  }),
  require('tailwindcss-skip-link')(),
],
```

## Extracting Tailwind components for link styling

`src/components/Welcome.vue`:

<div v-pre markdown="1">{% raw %}
```vuejs
<template>
  ...

  <div id="footer" class="text-xs text-white">
    <div class="container mx-auto px-4 pt-16 pb-4">
      <div class="border-t border-solid border-grey-darkest pt-6 -mb-6">
        <div class="mb-6">
          <p><a href="#0">Contact</a></p>
        </div>

        <div class="mb-6">
          <p>
            A clone of <a href="https://www.drupal.org">Drupal</a>’s default theme (Bartik).
            Built by <a href="https://www.oliverdavies.uk">Oliver Davies</a>
            using <a href="https://vuejs.org">Vue.js</a>
            and <a href="https://tailwindcss.com">Tailwind CSS</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
```

```vuejs
<style lang="sass">
#header a
  @apply text-white no-underline

  &:hover,
  &:focus
    @apply underline

#main a
  @apply text-blue-dark no-underline border-b border-blue border-dotted

  &:hover,
  &:focus
    @apply text-blue border-solid

#footer a
  @apply text-white no-underline border-b border-dotted border-white

  &:hover,
  &:focus
    @apply border-none
</style>
```
{% endraw %}</div>

## Extracting a Vue component for Drupal blocks

`src/components/DrupalBlock.vue`:

```vuejs
<template>
    <div class="drupal-block">
        <slot></slot>
    </div>
</template>

<style lang="sass" scoped>
.drupal-block
  @apply bg-grey-lightest p-4

  &:not(:last-child)
    @apply mb-4
</style>
```

`src/components/Welcome.vue`:

```vuejs
<drupal-block>
  <h2 class="font-serif font-normal text-base text-grey-darkest border-b border-solid border-grey-light mb-3">Search</h2>

  <div>
    <form action="#" class="flex">
      <input type="text" class="border border-solid border-grey p-2 w-full xl:w-auto">

      <button type="submit" class="bg-grey-lighter px-3 rounded-full border-b border-solid border-grey-dark ml-2 flex-none">
        <img src="img/loupe.svg" class="block">
      </button>
    </form>
  </div>
</drupal-block>
```

## Adding the Skip to Main Content Link

```html
<a href="#0" class="skip-link text-white bg-black-60 py-1 px-2 rounded-b-lg focus:no-underline focus:outline-none">Skip to main content</a>
```

```vuejs
<style lang="sass">
@tailwind preflight
@tailwind components

.skip-link:focus
  left: 50%
  transform: translateX(-50%)

@tailwind utilities
</style>
```
{% endblock %}

[0]: https://www.drupal.org
[1]: https://vuejs.org
[2]: https://tailwindcss.com
[3]: https://github.com/opdavies/rebuilding-bartik
[4]: https://rebuilding-bartik.netlify.com
[5]: https://www.drupal.org/project/tailwindcss
