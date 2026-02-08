---
title: Don't repeat yourself
permalink: daily/2025/03/26/repeat
tags:
  - software-development
  - php
cta:
snippet: |-
  "Don't repeat yourself" doesn't only apply to logic within code.
---

When most people think of "Don't repeat yourself" or DRY, they probably think about not duplicating logic in code.

If you've written some functionality once, you should avoid writing it again.

I was recently browsing the code for an open source package and saw this:

```php
/**
 * Flush everything.
 */
public function flush(): void;

/**
 * Sets the formatter.
 */
public function setFormatter(FormatterInterface $formatter): void;

/**
 * Gets the formatter.
 */
public function getFormatter(): FormatterInterface;
```

This is another instance of repetition.

The docblocks are just repeating what the code already tells me.

I can understand from the method names what each function does, and I can see what parameters they have and their types.

I can see if each method returns anything and, if so, what type it returns - e.g. `getFormatter` returns a `FormatterInterface`.

I think these docblocks aren't needed and in my projects, would suggest they be removed.

Unless they're adding more information, such as [PHPStan PHPDoc types][0], there's no need to repeat what the code already says.

[0]: %7B%7Bsite.url%7D%7D/daily/2025/03/21/phpdoc
