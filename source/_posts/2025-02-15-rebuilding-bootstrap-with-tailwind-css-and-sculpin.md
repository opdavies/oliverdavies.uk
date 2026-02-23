---
date: 2025-02-15
title: Rebuilding Bootstrap with Tailwind CSS (and Sculpin)
permalink: daily/2025/02/15/bootstrap
tags:
  - software-development
  - tailwind-css
  - sculpin
cta:
snippet: |-
  I've rebuilt some of the Bootstrap CSS example components with Tailwind CSS.
---

I've been [speaking about and advocating for Tailwind CSS][0] and utility-first CSS for a long time.

In my slide deck, I show screenshots of websites that are all built with Tailwind CSS - including some [rebuilds of existing websites][1].

I do this to show that the same approach and framework can be used to create different-looking designs because the classes are atomic and can be reused and combined as needed.

This isn't the case with other CSS frameworks that focus on components first.

As an experiment, some time ago I decided to [rebuild some of the Bootstrap example components using Tailwind CSS][3].

I've only done a pricing grid and album, but I may do more in the future.

I originally built the examples with Astro but have ported them to Sculpin, which I'm more familiar with.

If you want to see how I've built these components or how for an example of building a static website with Sculpin, [check out the source code][2].

[0]: {{site.url}}/presentations/taking-flight-with-tailwind-css
[1]: {{site.url}}/blog/uis-ive-rebuilt-tailwind-css
[2]: https://code.oliverdavies.uk/opdavies/bootstrap-with-tailwind
[3]: https://bootstrap-with-tailwind.oliverdavies.uk
