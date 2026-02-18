---
title: Plain text TODOs
permalink: daily/2025/05/07/st
tags:
  - software-development
cta:
snippet: |-
  A while ago, I wrote how I use plain text files for my project to-do lists. Today, I found an example whilst looking at an open source project repository.
---

In January, I wrote about [using plain text files for to-do lists][3] instead of larger and more complex project management tools.

I found an example of this in the code repository for st, [the simple terminal from suckless.org][1].

They have a [TODO.html file][0] which is a plain text list of todo tasks.

There are [a lot of examples on GitHub][2], too.

Something I like in st's file is this command:

```plain
grep -nE 'XXX|TODO' st.c
```

This finds TODO comments in the st.c file so those can be included.

[0]: https://git.suckless.org/st/file/TODO.html
[1]: https://st.suckless.org
[2]: https://github.com/search?q=path%3Atodo.txt+OR+path%3Atodo.md+OR+path%3Atodo.html&type=code
[3]: {{site.url}}/daily/2025/01/03/todotxt
