---
date: 2025-01-27
title: Should you have a separate front-end for your Drupal website?
permalink: daily/2025/01/27/separate-front-end
tags:
  - software-development
  - drupal
  - front-end
cta:
snippet: |-
  Should you have a separate front-end for your Drupal website?
---

A few years ago, "decoupled" or "headless" Drupal was a popular approach, leveraging Drupal's built-in JSON:API module to expose its data via an API which can be consumed by a separate front-end application.

The front-end application would retrieve the data from Drupal via the API and generate the appropriate HTML.

It's an approach I've used in the past and [spoken about at conferences][0], but it comes with pros and cons.

In theory, as the Drupal (or back-end application) and front-end are completely separate, there can be two separate and independent teams working on them.

This adds overhead and complexity and I've found that one team will commonly be blocking the other instead of both being able to work in parallel.

As I said yesterday, [previewing content in Drupal can be an issue][1] - particularly with a decoupled approach which needs a front-end to be rebuilt before the changes can be seen.

If you have a separate front-end, you'll need to create everything from scratch, such as writing accessible HTML markup and othe standard features that would normally be provided by Drupal and, because you've got two separate front-end and back-end applications, you've got twice the amount of maintenance.

You could also be excluding yourself from any new features that will be available in future versions of Drupal or Drupal CMS, such as the new Experience Builder.

Whilst decoupled/headless builds are a viable option and can work well in some situations, it's not something I recommend often.

[0]: {{site.url}}/presentations/decoupling-drupal-vuejs
[1]: {{site.url}}/daily/2025/01/26/layout-builder
