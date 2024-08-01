---
title: Getting (Your Data) Into Drupal 8
description:
  An overview of Drupal’s Migrate functionality, and a look at how to write your
  own migrations.
speakerdeck:
  id: 63e5dfce996e46699e304d50e896477b
  ratio: '1.77777777777778'
  url: 'https://speakerdeck.com/opdavies/getting-your-data-into-drupal-8-drupal_bristol'
video:
  type: youtube
  id: jtmARTuYhp8
tags: [drupalcamp, migration, drupal-8]
meta:
  og:
    title: Getting (Your Data) into Drupal 8
    description: 'How I migrated the Drupal Bristol website onto Drupal 8.'
    type: website
    image:
      url: /images/talks/getting-your-data-into-drupal-8.png
      width: 2560
      height: 1440
      type: image/png
use: [talks]
events:
  - event: drupal_bristol
    date: 2017-01-18
  - event: drupalcamp_london_17
    date: 2017-03-04
    time: '12:05 - 12:50'
---

If you’ve moved a site from Drupal 6 to 7, the chances are that you’ve either
used the upgrade path to update your old site in-place, or you built a new site
from scratch and used the Migrate module from contrib to migrate your data from
the old database.

In Drupal 8, things have changed as there’s no upgrade path from Drupal 7 and
the Migrate module has been moved into core, though there are still migration
related modules available in contrib.

This talk will look at the core Migrate module and how it implements Drupal 8
features such as YAML and the plugin and configuration systems, and how to write
your own migrations to get your data into Drupal 8.
