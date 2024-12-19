---
title: "Refactoring a Tailwind CSS component"
pubDate: 2022-09-09
permalink: "daily/2022/09/09/refactoring-tailwind-component"
tags: ["tailwind-css"]
---

After last night's Pro Tailwind theming workshop, I decided to revisit and refactor some similar code that I'd worked on before.

It was a demo for a presentation on utility-first CSS and Tailwind whilst I was at Inviqa.

I'd taken one of the components from the website that we'd lauched and rebuilt it - in particular to show how Tailwind could be used for responsive and themeable components.

[The original version](https://play.tailwindcss.com/Yfmw8O5UNN) was written in Tailwind 1 and used custom CSS with `@apply` rules to include text or background colours to elements based on the theme being used on that page or component.

As well as moving it into a Next.js application, [the new version](https://github.com/opdavies/inviqa-tailwindcss-example) uses techniques covered in Simon's workshop - using CSS custom properties (aka variables) to override the colours, and writing custom plugins to generate the required styles. It doesn't include everything from the workshop, but enough for this refactor.

I also moved the `flex-basis` classes into their own standalone plugin and might release that as it's own open-source plugin.

I'm working on a client project at the moment which will need switchable themes so I'm looking forward to putting these techniques to use again in the near future.
