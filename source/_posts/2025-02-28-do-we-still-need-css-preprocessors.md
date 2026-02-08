---
title: Do we still need CSS preprocessors?
permalink: daily/2025/02/28/preprocessors
tags:
  - software-development
  - css
cta:
snippet: |-
  With all the recent improvements to CSS, do we still need preprocessors like Sass and Less?
---

Before I started to use [Tailwind CSS][0], I used CSS preprocessors like Less and Sass to add features like variables and nesting to my CSS files.

Stylesheets would be written in .scss, .sass or .less files and processed to create the stylesheets that would be used by browsers.

But, with the recent improvements to CSS, do we still need these preprocessors?

Here's a very small example of some CSS that just works:

```css
:root {
  --color-primary: red;
  --color-secondary: green;
}

a {
  color: var(--color-primary);

  &:hover, &:focus {
    color: var(--color-secondary);
  }
}
```

It looks like a Sass file, but it's native CSS.

It has variables (a.k.a. custom properties) and nesting, which I think are the most used features from preprocessors.

But there's no additional build step to generate the end stylesheet. I can use this stylesheet as it is - making it easier to work on and less confusing for new Developers.

If I'm not using Tailwind CSS or atomic styles, writing plain CSS files is the approach I'd use.

No preprocessors needed.
