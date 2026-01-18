---
title: Smaller modules are more reusable
permalink: daily/2025/02/27/reusability
tags:
  - software-development
  - drupal
  - open-source
cta: ~
snippet: |
  The smaller your library or module is, the easier it is to reuse.
---

When you're writing open source code, such as a PHP library or a Drupal module, the larger it is, the harder it can be to reuse.

Each implementation will have its own requirements and specifics, so why have code that tries to do everything?

The smaller the code, the more reusable it is.

The most reusable code I've written have been in smaller modules, like the [System User][0] and [Null User][1] Drupal modules.

Both are very small and solve a specific problem.

The Null User module is used by the System User module to provide a default if no system user is defined.

It could have been part of the System User module, but extracting it into a separate module makes it more reusable.

It also makes System User leaner, less bloated and more focused on its use case and its own functionality.

This approach is based on the UNIX philosophy of a program doing one thing well, and chaining programs together when needed to solve a larger problem.

Then, if you need, you can extend the code in a custom module or add features [by applying patches][2].

[0]: https://www.drupal.org/project/system_user
[1]: https://www.drupal.org/project/null_user
[2]: {{site.url}}/daily/2025/02/24/patch
