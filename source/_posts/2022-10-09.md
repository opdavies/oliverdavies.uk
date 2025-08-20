---
title: Coding defensively, and Implicit vs explicit coding
pubDate: 2022-10-09
permalink: daily/2022/10/09/coding-defensively-implicit-explicit
tags: [tailwindcss, php]
---

As well as [being introduced to Astro]({{site.url}}/daily/2022/10/08/first-impressions-astro) in Simon's most recent Pro Tailwind workshop, something else that we discussed was implicit vs explicit coding, and coding defensively.

For example, if you had this code:

```javascript
const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-5 py-2',
  large: 'px-7 py-2.5 text-lg',
}

const shapeClasses = {
  square: '',
  rounded: 'rounded',
  pill: 'rounded-full',
}
```

Both the `medium` size and `square` shape have an implicit value.

The `small` size has a text size class of `text-sm` and the `large` size has `text-lg`. As there isn't a text size added for `medium`, it is implicitly `text-base` - the default text size.

Likewise, the `rounded` shape has a class of `rounded` and the `pill` shape has `rounded-full`. As a square button doesn't have any rounding, it has an empty string but it is implicitly `rounded-none` - the default border radius value.

If we were to code this explicitly, `text-base` and `rounded-none` would be added to their respective size and shape classes.

It's mostly personal preference, but explicitly adding the additional classes could potentially future-proof the components if there was a situation where the text size or border radius was being overridden.

It also makes it more obvious to anyone reading the code that these values are being set, rather than them needing to make that assumption - assuming that they're aware of the default values at all.

It's similar to having this example PHP code:

```language-php
function __invoke(string $type, int $limit): void {};
```

Whilst I'm using type hints for the parameters to ensure that the values are a string and an integer respectively, it's also safe to assume that the type shouldn't be an empty string, so do we check for that?

I'd also suggest that the limit shouldn't be a negative integer, so we'd want to check that the value is not less than zero, or if zero isn't being used as an "all" value, then we'd want to check that the limit is greater than one.

In this case, the type hints add some explicitness to the parameters, but checking for these additional conditions adds another defensive layer to the code - forcing it to return earlier with an explicit error message rather than causing a vaguer error and elsewhere in the application.

Personally, I like to be explicit and code defensively, making sure that I try and cover as many edge cases as possible and writing test cases for them.

Coming back to the Tailwind example, the majority of us decided to add in extra classes after the exercise and it was an interesting discussion and part of the workshop.
