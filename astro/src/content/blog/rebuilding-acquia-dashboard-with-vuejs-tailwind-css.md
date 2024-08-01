---
title: Rebuilding Acquia’s Dashboard with Vue.js and Tailwind CSS
excerpt: How I rebuilt Acquia’s dashboard using Vue.js and Tailwind CSS.
tags:
    - drupal
    - tailwind-css
    - tweet
    - vuejs
draft: true
date: ~
promoted: true
---

After
[rebuilding Drupal’s Bartik theme](/blog/rebuilding-bartik-with-vuejs-tailwind-css),
I’ve now used [Vue.js][vue] and [Tailwind CSS][tailwind] to rebuild another
Drupal related UI - this time it’s [Acquia’s](https://www.acquia.com) web
hosting dashboard. Again, you can [view the site on Netlify][netlify] and [the
code on GitHub][github].

## Why?

The same as the Bartik rebuild, this was a good opportunity for me to gain more
experience with new technologies - Vue in particular - and to provide another
demonstration of how Tailwind CSS can be used.

Like the Bartik clone, this was originally going to be another single page
rebuild, however after completing the first page I decided to expand it to
include three pages which also gave me the opportunity to use
[Vue Router](https://router.vuejs.org) - something that I had not used
previously - and to organise a multi-page Vue application.

## Configuring Vue Router

`src/router/index.js`:

```js
import Vue from 'vue';
import Router from 'vue-router';
import Applications from '@/views/Applications';
import Environment from '@/views/Environment';
import Environments from '@/views/Environments';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'applications',
      component: Applications,
    },
    {
      path: '/:id/environments',
      name: 'environments',
      component: Environments,
      props: true,
    },
    {
      path: '/:id/environments/:environmentName',
      name: 'environment',
      component: Environment,
      props: true,
    },
  ],
});
```

## Passing in data

`src/data.json`

```json
{
  "applications": {
    "1": {
      "id": 1,
      "name": "Rebuilding Acquia",
      "machineName": "rebuildingacquia",
      "type": "Drupal",
      "level": "Enterprise",
      "environments": {
        "dev": {
          "name": "Dev",
          "url": "dev.rebuilding-acquia.com",
          "label": "develop"
        },
        "stage": {
          "name": "Stage",
          "url": "stg.rebuilding-acquia.com",
          "label": "master"
        },
        "prod": {
          "name": "Prod",
          "url": "rebuilding-acquia.com",
          "label": "tags/2018-12-21"
        }
      },
      "tasks": [
        {
          "text": "Commit: fdac923 Merge branch 'update-password-policy' refs/heads/master",
          "user": "system",
          "times": {
            "display": "Dec 19, 2018 3:48:29 PM UTC +0000",
            "started": "Dec 19, 2018 3:48:29 PM UTC +0000",
            "completed": "Dec 19, 2018 3:48:29 PM UTC +0000"
          },
          "loading": false,
          "success": true
        }
      ]
    }
  }
}
```

## The Environments page

This was the first page that I rebuilt - the Environments page for an
application that shows the information of the different configured environments.

Vue Router is configured to show the

{% include 'figure' with {
    image: {
        src: '/images/blog/rebuilding-acquia-vue-tailwind/3-environments.png',
        alt: 'A screenshot of the rebuilt Environments page.',
    },
    caption: 'The rebuilt Environments page for an application.',
} %}

## The applications page

{% include 'figure' with {
    image: {
        src: '/images/blog/rebuilding-acquia-vue-tailwind/1-applications-grid.png',
        alt: 'The rebuild Applications page, with applications displayed in a grid.',
    },
    caption: 'The rebuilt Applications page - grid view',
} %}

{% include 'figure' with {
    image: {
        src: '/images/blog/rebuilding-acquia-vue-tailwind/2-applications-list.png',
        alt: 'The rebuild Applications page, with applications displayed as a list.',
    },
    caption: 'The rebuilt Applications page - list view',
} %}

## An environment page

{% include 'figure' with {
    image: {
        src: '/images/blog/rebuilding-acquia-vue-tailwind/4-environment.png',
        alt: 'A screenshot of the rebuilt Environment page.',
    },
    caption: 'The rebuilt page for an environment within an application.',
} %}

[github]: https://github.com/opdavies/rebuilding-acquia
[netlify]: https://rebuilding-acquia.oliverdavies.uk
[tailwind]: https://tailwindcss.com
[vue]: https://vuejs.org
