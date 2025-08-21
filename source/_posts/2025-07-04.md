---
date: 2025-07-04
title: Avoiding indentation
permalink: /daily/2025/07/04/avoiding-indentation
---

A guide that I use when writing or reviewing code is to avoid or minimise indentation.

Usually, the nearer to the left of the file the text is, the better.

If you had this code:

```php
<?php

function doSomething() {
  if ($a === TRUE) {
    if ($b === 'banana') {
      if ($c > 3) {
        // Do something...
     }
    }
  }
}
```

What if you refactored it to use early returns and remove some indentation?

```php
<?php

function doSomething() {
  if ($a !== TRUE) {
    return;
  }

  if ($b !== 'banana') {
    return;
  }

  if ($c <= 3) {
    return;
  }

  // Do something...
}
```

This is easier for me to read and review.

I can keep track of there I am in the function as it is more linear. Especially if the code within each condition block is more complex.

## Indentation in CSS

CSS now supports nesting, similar to Sass and other preprocessors, so you can write CSS like this:

```css
.menu {
  ul {
    li {
      a {
        color: red;
      }
    }
  }
}
```

I usually find this harder to search, particularly if a pre-processor like Sass is being used, so I avoid it as much as possible.

I only really use it to style pseudo-selectors like `:hover` and `:focus` to element.

## Indentation in Nix

In Nix, these two examples achieve the same thing:

```nix
services.gammastep = {
  enable = true;
  provider = "geoclue2";
};

services.gammastep.enable = true;
services.gammastep.provider = "geoclue2";
```

In long files, it can be hard to keep track of what service you're configuring once it has been indented.

Whilst it adds some duplication, I've recently favoured the second approach in my code.

## Here's the thing

There needs to be some indentation in code to allow for functions, conditions, loops, etc.

But, whichever language I'm writing, I usually aim for no more than two levels of indentation in a file.

If code is indented further, I'll try or suggest an alternative approach to reduce the indentation - which usually results in cleaner code overall.
