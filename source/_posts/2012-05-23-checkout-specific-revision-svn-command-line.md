---
title: Checkout a specific revision from SVN from the command line
excerpt: How to checkout a specific revision from a SVN (Subversion) repository.
tags:
  - svn
  - version-control
---
How to checkout a specific revision from a SVN (Subversion) repository.

If you're checking out the repository for the first time:

```language-bash
$ svn checkout -r 1234 url://repository/path
```

If you already have the repository checked out:

```language-bash
$ svn up -r 1234
```
