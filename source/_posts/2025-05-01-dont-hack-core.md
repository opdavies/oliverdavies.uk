---
title: Don't hack core
permalink: daily/2025/05/01/hack
tags:
  - software-development
  - drupal
  - drupal-planet
  - php
cta:
snippet: |-
  Don't "hack" or edit files within Drupal core or contrib directories in projects, unless you want to risk losing them. If you need to change them, patch them.
---

I've worked on a lot of Drupal projects and there have been times when previous Developers have "hacked" Drupal core or contrib modules by editing them to add or change functionality.

This is a short-sighted approach, as any changes to third-party code such as Drupal core or contrib modules would be lost when a new version is downloaded.

Most of the time, changes can be made within custom code that won't be overwritten and accidentally lost.

But in cases where the source code needs to be changed, [you can patch files instead][0].

You can commit the patch file to your project to save the changes, but you're responsible for maintaining it and ensuring it applies to any future updates of the code.

If you can, commit the changes upstream.

Then you won't need to patch files and others will benefit from the contribution.

[0]: {{site.url}}/daily/2025/01/14/patching-drupal
