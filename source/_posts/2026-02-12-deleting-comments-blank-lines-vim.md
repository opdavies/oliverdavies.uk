---
title: Simplifying Drupal's default.settings.php file with Vim
tags: [php, drupal, vim]
date: 2026-02-12
---

Drupal's default.settings.php file contains 804 commented lines, 45 blank lines and only 12 lines of code.

To remove the commented lines, I can run the following in Vim in command mode:

```plain
:g/^\s*[/*#]/d
```

This performs a global substitution on the current buffer, deleting lines that start with a comment character (ignoring spaces before it).

This will leave a number of blank lines, but that can be solved with another substitution:

```plain
:g/^\n\n/d
```

This finds and deletes pairs of blank lines, creating a much smaller and simpler file with no comments and only nine blank lines.
