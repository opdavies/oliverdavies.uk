---
title: Introducing a Drupal distribution for meetup websites
excerpt: I'm starting development on a new Drupal distribution for building meetup group websites.
tags:
    - drupal
    - drupal-9
    - drupal-distribution
    - drupal-meetup-distribution
    - personal
    - php
    - php-south-wales
date: 2021-10-07
---

I'm the current organiser of the [PHP South Wales user group](https://www.phpsouthwales.uk) and built the current website with Drupal 8, which I started in 2019.

There are some basic pages, but also functionality to display upcoming and past events, show current sponsors, and to populate event data from Meetup.com - functionality that could needed by other meetup groups for their websites - such as other PHP and Drupal user groups that I've organised and attended.

Inspired by other Drupal distributions like [LocalGov](https://www.drupal.org/project/localgov), I've decided to refactor the current site into a reusable distribution that other meetup groups can use. It's not intended to be a clone of Meetup.com, but to be used for a website for a single meetup group to show their events and showcase their own community.

This also means that any new functionality can be added straight to the distribution and immediately available for everyone.

I've created a [project page on Drupal.org][drupalorg] and a [Drupal Meetup organisation on GitHub][github] which contains repositories for the distribution as well as a project template that are pushed to [Packagist][packagist] to that they can be installed with Composer - e.g. `composer create-project --stability dev drupal-meetup/drupal-meetup-project my-new-meetup`.

This seems like a good opportunity to do some more Drupal contribution and may benefit others too who want to build their own meetup group websites.

[drupalorg]: https://www.drupal.org/project/meetup
[github]: https://github.com/drupal-meetup
[packagist]: https://packagist.org/packages/opdavies/?query=drupal-meetup
