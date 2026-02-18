---
title: Archiving Drupal websites as static websites
permalink: daily/2025/03/18/archiving
tags:
  - software-development
  - drupal
  - php
  - static-websites
  - static-site-generators
cta:
snippet: |-
  If you no longer need to edit content in your CMS-powered website, why not archive it as a static website?
---

Static websites can be created by writing each file by hand or using a tool like [a static site generator][0].

But what if you've already got a dynamic website that you no longer need to be editable?

What if it was for an event that has passed, like a DrupalCamp?

If you no longer need to update the content via the admin UI, you could archive it by converting it to a static website.

Then you no longer need to maintain and update it, and [simplify your hosting environment][3].

You could use [Tome, a static site generator for Drupal][1], or use command line tools like `wget` with options like `--mirror` to create a static version by crawling a live website.

There are [a few options on Drupal.org][2], which will also work with other CMSes and frameworks.

This is what I've done for old websites like our old DrupalCamp Bristol websites.

That means they're still available for people to see, but without the maintenance and security overhead.

[0]: {{site.url}}/presentations/sculpin
[1]: {{site.url}}/daily/2025/03/15/tome
[2]: https://www.drupal.org/docs/administering-a-drupal-site/creating-a-static-archive-of-a-drupal-site
[3]: {{site.url}}/daily/2025/03/13/deploy
