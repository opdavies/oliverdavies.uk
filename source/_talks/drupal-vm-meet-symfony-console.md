---
title: Drupal VM, Meet Symfony Console
tags: [conference, php, drupal-vm, symfony]
slides:
    url: https://speakerdeck.com/opdavies/drupal-vm-meet-symfony-console
    embed: <script async class="speakerdeck-embed" data-id="56c79770f73f4e47a542a30243437c49" data-ratio="1.37081659973226" src="//speakerdeck.com/assets/embed.js"></script>
image: drupal-vm-meet-symfony-console.png
events:
    - { event: drupalcamp-bristol-16, date: '2016-07-23' }
---
_TL;DR - Come and learn about Symfony Console, with examples from a real-world project._

The [Drupal VM Generator][2] is a CLI application, built on [Symfony Console][0], that generates configuration files for [Drupal VM][1] based on personal settings and user interaction.

After an introduction to Drupal VM itself and the Drupal VM Generator, we’ll jump into the code and see how Symfony Console applications are structured, how to write new commands, and how to integrate additional libraries like Guzzle, Twig and other Symfony components - whilst referencing code from the Drupal VM Generator project.

[0]: http://symfony.com/doc/current/components/console/introduction.html
[1]: https://www.drupalvm.com
[2]: https://www.drupalvmgenerator.com
