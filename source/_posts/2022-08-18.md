---
permalink: daily/2022/08/18/talking-drupal-tailwind-css
pubDate: 2022-08-18
title: "'Talking Drupal' and Tailwind CSS"
tags:
  - css
  - tailwind-css
  - twig
---

In March, I was a guest again on the Talking Drupal podcast. This time I was talking about utility CSS and, in particular, the Tailwind CSS framework.

I've become a big fan of this approach to styling websites and was an early adopter of Tailwind, and have released [a starter-kit theme](https://www.drupal.org/project/tailwindcss) for building custom Drupal themes with Tailwind CSS based on what I was using for my own client projects.

## Rebuilding Talking Drupal with Tailwind

Usually when I give a Tailwind CSS talk at a conference or user group, I rebuild something familiar - maybe a page of their website - as an example and to explain some of the concepts and anything that was particularly interesting during the build. (I have [a blog post]({{site.url}}/blog/uis-ive-rebuilt-tailwind-css) that lists the ones that I've done before).

After this podcast episode, I built a [Tailwind version of the Talking Drupal homepage](https://talking-drupal-tailwindcss.oliverdavies.uk).

But, given that Drupal uses Twig and that we'd talked about best practices around using a templating engine to use loops and extract components to organise code and reduce duplication, I definitely wanted to build this example using Twig templates.

Drupal seemed like too much for a single page example, and Symfony or Sculpin could distract from the main focus of the demo, so I decided to start from scratch with an empty PHP file and add Twig and any other dependencies myself.

[The code repository](https://github.com/opdavies/talking-drupal-tailwindcss) is publicly viewable on my GitHub profile so people can look at the code and see some of the things that I talked about during the episode in practice and not just the resulting HTML a browser.

You can [listen to the episode](https://talkingdrupal.com/338), and if you want any more information, the slides and video from my [Taking Flight with Tailwind CSS talk]({{site.url}}/talks/taking-flight-with-tailwind-css) are on my website.
