---
title: TDD - Test Driven Drupal
description: How to write automated tests for Drupal, and how to create a new Drupal module using test driven development.
speakerdeck:
  id: 088cb18033064f5cb18d1079795294a1
  ratio: '1.77777777777778'
  url: 'https://speakerdeck.com/opdavies/tdd-test-driven-drupal'
video:
  type: youtube
  id: 3AUhpkxZ7DQ
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

Testing is important. Why? It allows developers to add new features and edit and refactor existing code without the worry of adding regressions, reduces the reliance on manual testing to discover bugs, and by taking a test driven approach, your implementation code is leaner as you only write what is needed for your tests to pass.

Drupal 7 includes the SimpleTest module for unit and functional testing, whilst Drupal 8 also includes and supports PHPUnit - the defacto PHP testing framework, used by other PHP projects including Symfony and Laravel - making it easier for people to test their code. And with testing being one of the Drupal core gates with tests needing to be included with every new feature or bug fix, and core’s 100% pass rate policy, testing has become an essential skill when contributing to core, or when working on your own projects. In this talk, we’ll cover the methodology and terminology involved with automated testing, and then take a test driven approach to creating a new Drupal module.

{% endblock %}
