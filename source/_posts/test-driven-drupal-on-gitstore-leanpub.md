---
title: Test Driven Drupal on Gitstore and Leanpub
excerpt: The work-in-progress codebase for the example application is now on Gitstore.
date: 2020-04-22
tags: [drupal, drupal-8, drupal-association, drupal-planet, drupalcares, testing, test-driven-drupal]
has_tweets: true
---

Some time ago, I announced that I was planning on writing a book on automated testing and test driven development with Drupal. I [created a landing page][landing page] and set up a mailing list, but I wasn't sure at that point what I was going to cover or create as part of the book.


{% include 'tweet' with {
    class: 'my-6',
    data_cards: true,
    content: '<p lang="en" dir="ltr">I&#39;m going to write a book on automated testing in Drupal. Join the mailing list for updates, and I&#39;m happy to take suggestions on what to cover. <a href="https://t.co/YXNpe6f8Ft">https://t.co/YXNpe6f8Ft</a> <a href="https://twitter.com/hashtag/drupal?src=hash&amp;ref_src=twsrc%5Etfw">#drupal</a></p>&mdash; Oliver Davies (@opdavies) <a href="https://twitter.com/opdavies/status/996483775994433536?ref_src=twsrc%5Etfw">May 15, 2018</a></blockquote>',
} %}

Being a meetup and DrupalCamp conference organiser, after some thought I decided to build a website for an example conference, and that some of this code would then be included in the book as example content. This seemed to cover most of what I originally wanted, through features like a call for papers for potential speakers to propose sessions, allowing organisers to administer and moderate those proposals, automatically sending notification emails to submitters and displaying the accepted sessions.

I've started building it with Drupal 8.8 and it is [now available on GitStore][gitstore] to purchase access to, including all future updates as I continue building the application - adding new features and upgrading to Drupal 9 once it is released. There are some other interesting things there too, such as using feature flags to enable or disable functionality, and using GitHub Actions to run the tests automatically.

The book itself I've [added a page for on Leanpub][leanpub], and I'll be continuing to add content to it in parallel to building the example codebase. Once there is enough content, I will release the first draft for purchase.

Any purchases that are made via Gitstore or Leanpub, an amount will be donated to the [Drupal Association][] and the [#DrupalCares campaign][drupalcares] to help sustain the Association during COVID-19.

[drupal association]: https://www.drupal.org/association
[drupalcares]: https://www.drupal.org/association/drupal-cares-challenge
[gitstore]: https://enjoy.gitstore.app/repositories/opdavies/test-driven-drupal-conference-app
[landing page]: /test-driven-drupal
[leanpub]: https://leanpub.com/test-driven-drupal
