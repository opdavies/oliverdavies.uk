---
title: Having Fun with Drupal 8, PHP libraries and the Drupal.org API
description: A crash course in developing PHP packages and Drupal 8 modules, based on the Drupal.org API.
speakerdeck:
    id: 6e42ae9620bb4e91b3955f8c30d66934
    ratio: "1.77777777777778"
    url: https://speakerdeck.com/opdavies/having-fun-with-drupal-8-php-libraries-and-the-drupal-dot-org-api
image:
    url: '%site.assets.url%/assets/images/talks/having-fun-drupalorg-api.png'
    width: 2000
    height: 1125
    type: image/png
video:
    type: youtube
    id: JyDjC7gGDpU
events:
    -
        name: DrupalCamp London 2019
        location: London, UK
        url: http://drupalcamp.london
        date: 2019-03-03
        time: "12:05 - 12:50"
    -
        name: Drupal Bristol
        location: Bristol, UK
        url: https://www.drupalbristol.org.uk
        date: 2018-04-18
        joindin: https://joind.in/talk/14851
---

A overview and demo of some of the open source projects that I’ve been working on lately that are based on information from the Drupal.org API, including a PHP library for the API itself as well as some Drupal 8 modules that use it.

This session will cover various topics including:

- Why would you want to separate your code into reusable packages
- An overview of how to structure a PHP package (e.g. an API for interacting with Drupal.org)
- How to add a PHP package as a dependency for a Drupal module using Composer
- How to create routes and services, and use dependency injection in Drupal 8
- How to use Drupal to configure the packages
- How to increase performance and reliability by using Drupal's cache system to store API results

## Links

- [Drupal.org API library][2]
- [Drupal.org API documentation][3]
- [Laravel Collections][4]
- Example module: [Drupal.org project statistics][5]
- Example module: [Drupalversary][6]
- Talk: [Using Laravel Collections outside Laravel][7]

[0]: https://www.drupalbristol.org.uk
[2]: https://github.com/opdavies/drupalorg-api-php
[3]: https://www.drupal.org/drupalorg/docs/api
[4]: https://laravel.com/docs/collections
[5]: https://github.com/opdavies/drupal-module-drupalorg-project-statistics
[6]: https://github.com/opdavies/drupal-module-drupalversary
[7]: /talks/using-laravel-collections-outside-laravel/
