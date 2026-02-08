---
title: Upgrading incrementally
permalink: daily/2025/04/17/incrementally
tags:
  - software-development
cta: pair
snippet: |-
  Did you know you can have more than one version of your website in production at the same time?
---

Did you know you can have more than one version of your website in production at the same time?

If you're migrating to a new platform or upgrading to a new major version, such as Drupal 7 to Drupal 11, you don't need to do it all at once.

You can do it incrementally, and seamlessly for end users.

The MVP for your new website can be a particular section or a single page that is developed and launched to production alongside the current website.

Depending on the path someone goes to, they'll either see the new website or the old one.

Focusing on delivering a single page or section of a website is much faster compared to rebuilding the entire thing, it's a lot less risky as the feedback loop is much shorter and you get feedback from real users.

Once you have the new MVP deployed to a hosting environment, you can configure a proxy to assign traffic between it and the existing hosting based on path, request headers, or a combination of different options.

This is an approach I've taken with my website as I've upgraded between different versions of Drupal and also static site generators such as Jekyll, Astro and Sculpin.

Instead of waiting for months to deliver a new website to production, do it in days or weeks.
