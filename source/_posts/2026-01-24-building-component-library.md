---
title: I'm Building my own Component Library
tags: [php, sculpin, css]
---

It's been a while since I built this version of my website, so plan to do some refactoring and updating in the near future.

Before I start, I decided to separate parts into a [new component library section][0].

Not using a full component library system like Fractal or Storybook, but a simple Sculpin content type and its usual Twig templating system.

This means I can re-use my existing Twig layouts and includes, and easily access my existing content to populate the components with real-life content.

The [testimonial component][1] shows different variations of a testimonial, such as whether to show a person's role or job title, to link their name to a website, or if there is a photo to display.

If you're interested, here is [the code for this section](https://git.oliverdavies.uk/opdavies/oliverdavies.uk/src/branch/main/source/_components).

Before I refactor a component, I'll move it into the component library to make it easier to work on and test.

It's a process that works well for my clients, so why wouldn't I do it for myself?

[0]: {{site.url}}/component-library
[1]: {{site.url}}/component-library/testimonial
