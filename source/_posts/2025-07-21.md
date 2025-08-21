---
date: 2025-07-21
title: Exploring Drupal recipes
permalink: /daily/2025/07/21/exploring-drupal-recipes
---

Since [Gareth Alexander's talk at DrupalCamp England][1], I've started to explore Drupal's new recipe system.

I've used the Drupal CMS Admin UI and Drupal CMS SEO Basic recipes, but there are [a lot more available][0].

Recipes are meta-packages that install other Drupal packages (including other recipes), add configuration and can apply patches.

The SEO recipe adds and configures Easy Breadcrumb, Pathauto, Redirect and Token modules, so they work straight away with a default configuration.

It's great that Drupal CMS recipes can be installed with a simple `composer require` command, so you can use them with any Drupal website - even if you're not using Drupal CMS.

If you want to learn more about Drupal recipes, [listen to episode 39 of the Beyond Blocks podcast][2] with Gareth.

[0]: https://new.drupal.org/browse/recipes
[1]: https://www.youtube.com/watch?v=b7MDA-kKCCk
[2]: /podcast/29-drupal-cms-recipes
