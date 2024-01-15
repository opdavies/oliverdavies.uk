---
title: Drupal VM, Meet Symfony Console
description: How to develop command line applications using Symfony Console, using the Drupal VM CLI as an example.
speakerdeck:
  id: 56c79770f73f4e47a542a30243437c49
  ratio: "1.37081659973226"
  url: https://speakerdeck.com/opdavies/drupal-vm-meet-symfony-console
image: drupal-vm-meet-symfony-console.png
events:
  -
    name: DrupalCamp Bristol 2016
    location: Bristol, UK
    date: 2016-07-23
---

_TL;DR - Come and learn about Symfony Console, with examples from a real-world
project._

The [Drupal VM Generator][2] is a CLI application, built on [Symfony Console][0], that generates configuration files for [Drupal VM][1] based on personal settings and user interaction.

After an introduction to Drupal VM itself and the Drupal VM Generator, we’ll jump into the code and see how Symfony Console applications are structured, how to write new commands, and how to integrate additional libraries like Guzzle, Twig and other Symfony components - whilst referencing code from the Drupal VM Generator project.

[0]: http://symfony.com/doc/current/components/console/introduction.html
[1]: https://www.drupalvm.com
[2]: https://www.drupalvmgenerator.com
