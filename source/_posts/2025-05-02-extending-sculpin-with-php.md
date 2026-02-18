---
title: Extending Sculpin with PHP
permalink: daily/2025/05/02/extend
tags:
  - software-development
  - php
  - sculpin
  - static-site-generators
cta:
snippet: |-
  I like the Sculpin static site generator, namely because as a PHP Developer, it's easy for me to extend and add custom functionality to.
---

I like the [Sculpin static site generator][0] - a tool I've used for various personal and client projects where a full content management system like Drupal isn't need.

It's written in PHP and uses several Symfony components, including Twig for templating.

These are the same as Drupal and, of course, the Symfony framework. Two tools I'm very familiar with.

A big reason why I decided to learn Sculpin in 2015 was to learn Twig and other Drupal 8 concepts before it was released.

You don't need to write PHP code to use Sculpin, but you can easily extend it with PHP code if you need to.

You can write custom service classes - the same as in Drupal or Symfony - and move complex logic there and out of your template files.

This also means you can write automated tests with PHPUnit.

I've added `src` and `tests` directories to [my website repository][1], which contain my custom Twig extensions that add new functions for counting the number of presentations I've given and my years of experience.

There are a lot of choices for static site generators, including several PHP-based ones, but the familiarity and customisability of Sculpin make it a good choice for me.

[0]: {{site.url}}/presentations/sculpin
[1]: https://code.oliverdavies.uk/opdavies/oliverdavies.uk/src/commit/f21bb125c5b01a9e5cd572c77dca0e8d5cc13849
