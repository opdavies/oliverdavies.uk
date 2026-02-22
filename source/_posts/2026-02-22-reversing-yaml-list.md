---
title: Reversing a YAML list
slug: reversing-yaml-list
date: 2026-02-22 22:48
tags:
  - linux
  - command-line
---
Reversing a YAML list is easy with `yq`:

```bash
yq eval '.testimonials |= reverse' testimonials.yml
```

Outputting the reversed list to a file:

```bash
yq eval '.testimonials |= reverse' testimonials.yml > testimonials2.yml
```

