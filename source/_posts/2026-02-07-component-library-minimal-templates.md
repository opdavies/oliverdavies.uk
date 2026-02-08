---
title: 'Creating a component library in Sculpin: Part 2'
tags: [twig, sculpin]
date: 2026-02-07
---

Earlier this week, I started writing a series of posts about [how I'm building
the component library section][0] within my Sculpin website.

I showed how I created a new content type and layout, and created a simple
"About me" component.

To avoid distractions, I wanted to make these pages as minimal as possible and
remove parts of the page that are unrelated to the component being shown.

`base.html.twig` is my base layout that contains the HTML structure and some of
the `body` element code that is re-usable for all content types.

This is also the template that the `component` content type uses.

To avoid duplication and a larger refactor, I decided to alter `base.html.twig`
to hide the parts of the page that I didn't want to show.

This is how I'm hiding my page header on those pages:

```twig
{% verbatim -%}
{% if not (page.url matches "#^/component-library/#") %}
  <header id="page-header">
    {% include 'logo.html.twig' %}
  </header>
{% endif %}
{%- endverbatim %}
```

I check if the URL contains `/component-library/` and only include the code if
this is not true for each page.

There is a larger refactor I could do by introducing another layout or
additional Twig blocks, but this was the simplest solution to achieve what I
wanted.

[0]: %7B%7Bsite.url%7D%7D/blog/sculpin-component-library-part1
