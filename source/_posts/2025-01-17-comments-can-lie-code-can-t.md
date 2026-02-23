---
date: 2025-01-17
title: Comments can lie. Code can't.
permalink: daily/2025/01/17/lies
tags:
  - software-development
cta:
snippet: |-
  Comments in code can lie, but the code itself can't.
---

How often have you need code like this?

```php
// Returns true.
return false;
```

Whilst a comment like this could have been true when it was written, the code can change independently of the comment - making them out of sync and the comment no longer true.

As the comment is not evaluated or executed, there isn't a way to validate whether it's still correct, so whilst it could be, it may not be.

Comments should describe why the code is needed, not what it does.

If a comment describes the functionality, it can be refactored and extracted to a class, method or function - a.k.a. self-documenting code.

But, if you want something that will alert you if the functionality changes, look into [automated testing][0].

If you have a passing test that suddenly starts to fail, you know the behaviour has changed.

[0]: {{site.url}}/atdc
