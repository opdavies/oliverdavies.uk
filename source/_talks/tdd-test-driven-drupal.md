---
title: TDD - Test Driven Drupal
description:
  How to write automated tests for Drupal, and how to create a new Drupal module
  using test driven development.
speakerdeck:
  id: 088cb18033064f5cb18d1079795294a1
  ratio: '1.77777777777778'
  url: 'https://speakerdeck.com/opdavies/tdd-test-driven-drupal'
video:
  type: youtube
  id: 3AUhpkxZ7DQ
tags: [drupalcamp, simpletest, phpunit, testing]
has_tweets: true
image:
  url: /images/talks/test-driven-drupal-development.png
  width: 2560
  height: 1440
  type: image/png
use: [talks]
events:
  - event: drupalcamp_london_17
    date: 2017-03-04
    time: '16:15 - 17:00'
  - event: drupalcamp_dublin_17
    date: 2017-10-21
    time: '12:00 - 12:40'
  - event: drupal_bristol
    date: 2017-11-22
  - event: drupal_somerset
    date: 2018-06-14
  - event: drupal_dev_days_18
    date: 2018-07-05
    time: '12:15 - 13:00'
  - event: drupalcamp_london_19
    date: 2019-03-02
    time: '14:00 - 14:45'
  - event: nwdug
    date: 2020-05-12
    remote: true
---

{% block content %}

<!-- prettier-ignore -->
Testing is important. Why? It allows developers to add new features and edit and
refactor existing code without the worry of adding regressions, reduces the
reliance on manual testing to discover bugs, and by taking a test driven
approach, your implementation code is leaner as you only write what is needed
for your tests to pass.

Drupal 7 includes the SimpleTest module for unit and functional testing, whilst
Drupal 8 also includes and supports PHPUnit - the defacto PHP testing framework,
used by other PHP projects including Symfony and Laravel - making it easier for
people to test their code. And with testing being one of the Drupal core gates
with tests needing to be included with every new feature or bug fix, and core’s
100% pass rate policy, testing has become an essential skill when contributing
to core, or when working on your own projects.

In this talk, we’ll cover the methodology and terminology involved with
automated testing, and then take a test driven approach to creating a new Drupal
module.

<!-- prettier-ignore -->
{% endblock %}

{% block tweets %}

<!-- prettier-ignore -->
<div class="flex flex-wrap -mx-2">
    <div class="w-full sm:w-1/2 lg:w-1/3 px-2 flex flex-col">
        {% include 'tweet' with {
            content: '<p lang="en" dir="ltr">An informative session on <a href="https://twitter.com/hashtag/TDD?src=hash&amp;ref_src=twsrc%5Etfw">#TDD</a> <a href="https://twitter.com/hashtag/Drupal?src=hash&amp;ref_src=twsrc%5Etfw">#Drupal</a> <br>&quot;Test Driven Drupal Development with SimpleTest and PHPUnit - Oliver Davies&quot;<a href="https://twitter.com/opdavies?ref_src=twsrc%5Etfw">@opdavies</a> Thanks ! :) <a href="https://t.co/xQNaq8e0zU">https://t.co/xQNaq8e0zU</a></p>&mdash; जयदीप सिंह कण्डारी (@JayKandari) <a href="https://twitter.com/JayKandari/status/939598826087706624?ref_src=twsrc%5Etfw">December 9, 2017</a>',
        } %}
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/3 px-2 flex flex-col">
        {% include 'tweet' with {
            content: '<p lang="en" dir="ltr">Really motivational and well delivered talk from <a href="https://twitter.com/opdavies?ref_src=twsrc%5Etfw">@opdavies</a> tonight. Structured brilliantly - I don&#39;t think anybody left not wanting to write tests! &quot;Test Driven Drupal&quot; 💧 <a href="https://twitter.com/hashtag/Drupal8?src=hash&amp;ref_src=twsrc%5Etfw">#Drupal8</a> <a href="https://twitter.com/hashtag/testing?src=hash&amp;ref_src=twsrc%5Etfw">#testing</a> <a href="https://twitter.com/hashtag/drupal?src=hash&amp;ref_src=twsrc%5Etfw">#drupal</a> <a href="https://t.co/bvQf7WFwdy">pic.twitter.com/bvQf7WFwdy</a></p>&mdash; Drupal Somerset (@drupalsomerset) <a href="https://twitter.com/drupalsomerset/status/1007413440875565056?ref_src=twsrc%5Etfw">June 15, 2018</a>',
        } %}
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/3 px-2 flex flex-col">
        {% include 'tweet' with {
            content: '<p lang="en" dir="ltr">Terrible quality photo but the talk drove me to test and it&#39;s great so far, it&#39;s really helped give me peace of mind and helped me uncover a bug I wouldn&#39;t have otherwise :) so thank you 😁</p>&mdash; Tawny Bartlett (@littlepixiez) <a href="https://twitter.com/littlepixiez/status/1009189555600273409?ref_src=twsrc%5Etfw">June 19, 2018</a>',
            no_parent: true,
        } %}
    </div>
</div>
{% endblock %}
