---
title: Quickly Apply Patches Using Git and curl or wget
date: 2013-12-24
excerpt: How to quickly download a patch file and apply it to a Git repository in one line.
tags:
    - drupal-planet
    - git
---

Testing a patch file is usually a two-step process. First you download the patch
file from the source, and then you run a separate command to apply it.

You can save time and typing by running the two commands on one line:

```bash
$ curl http://drupal.org/files/[patch-name].patch | git apply -v
```

Or, if you don't have curl installed, you can use wget:

```bash
$ wget -q -O - http://drupal.org/files/[patch-name].patch | git apply -v
```

These commands need to be run within the root of your Git repository (i.e. where
the .git directory is).

These snippets were taken from
[Applying Patches with Git](https://drupal.org/node/1399218) on Drupal.org.
