---
title: Nix Flake templates and Drupal Flake
tags: [nix, php, drupal]
date: 2026-01-30 20:02
---

Earlier, I wrote about [my Nix Flake templates][0] I've started to build.

Another example of Nix Flake templates is [the Drupal Flake project][1] that I [discussed with John Locke][2] and recently became a contributor to.

To create a flake for a new Drupal application is simple as running `nix flake init -t git+https://git.drupalcode.org/project/drupal_flake` and it will download all the files from the Git repository.

I've started to use Drupal Flake for some of my projects, including getting the [old PHP South Wales website][3] running locally on PHP 7.4, and it's worked very well.

[0]: %7B%7Bsite.url%7D%7D/blog/building-nix-flake-templates
[1]: https://www.drupal.org/project/drupal_flake
[2]: %7B%7Bsite.url%7D%7D/podcast/33-john-locke-drupal-flake
[3]: %7B%7Bsite.url%7D%7D/blog/rebooting-php-south-wales-website
