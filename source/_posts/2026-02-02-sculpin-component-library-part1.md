---
title: 'Creating a component library in Sculpin: Part 1'
tags: [sculpin, php]
date: 2026-02-02 18:13
---

Last week, I wrote that I started [building my own component library][0].

Rather than use a separate tool like Fractal or Storybook, I built it straight
into my existing Sculpin website.

The next few posts will be a summary of the steps I took.

## Creating a content type

To create a new `components` content type, I added this to my
`sculpin_kernel.yml` file:

```yaml
sculpin_content_types:
  components:
    permalink: /component-library/:basename/
```

This allows me to create components within `source/_components` as Markdown
files or Twig templates, using the filename for the URL.

### Creating a layout

Each content type needs a layout, so I created one at
`source/_layouts/component.html.twig`:

{% verbatim %}

```twig
{% extends "base" %}
```

{% endverbatim %}

It only extends my `base.html.twig` layout, but I can customise it in the
future if I need to.

## Creating my first component

I could then create my first component at
`source/_components/about-me.html.twig`:

{% verbatim %}

```twig
---
title: '"About Me" block'
---

<p>About me</p>
```

{% endverbatim %}

This was then accessible at <http://localhost:8000/component-library/about-me>
and the first component was live.

In the next post, I'd explain the changes I needed to make to `base.html.twig`
to create a minimal version of my page layout for the component library
section.

[0]: {{site.url}}/blog/building-component-library
