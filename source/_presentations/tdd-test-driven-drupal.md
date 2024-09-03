---
title: TDD - Test-Driven Drupal
description: How to write automated tests for Drupal, and how to create a new Drupal module using test driven development.
speakerdeck:
  id: 088cb18033064f5cb18d1079795294a1
  ratio: "1.77777777777778"
  url: "https://speakerdeck.com/opdavies/tdd-test-driven-drupal"
video:
  type: youtube
  id: 81J0dPvqG-g
image:
  url: '%site.assets.url%/assets/images/talks/test-driven-drupal-development.png'
  width: 2560
  height: 1440
  type: image/png
use: [talks]
events:
  - name: DrupalCamp London 2017
    location: London, UK
    date: 2017-03-04
    time: "16:15 - 17:00"
    url: ~
  - name: DrupalCamp Dublin 2017
    location: Dublin, Ireland
    date: 2017-10-21
    time: "12:00 - 12:40"
    url: http://2017.drupal.ie
  - name: Drupal Bristol
    date: 2017-11-22
    location: Bristol, UK
    url: https://www.drupalbristol.org.uk
  - name: Drupal Somerset
    date: 2018-06-14
    location: Glastonbury, UK
  - name: Drupal Developer Days 2018
    date: 2018-07-05
    time: "12:15 - 13:00"
    location: Lisbon, Portugal
    url: http://lisbon2018.drupaldays.org
  - name: DrupalCamp London 2019
    date: 2019-03-02
    time: "14:00 - 14:45"
    location: London, UK
    url: ~
  - name: NWDUG
    date: 2020-05-12
    location: Manchester, UK
    url: http://nwdrupal.org.uk
    online: true
  - name: Bay Area Drupal Camp (BADCamp)
    date: 2020-10-14
    url: https://2020.badcamp.org/session/tdd-test-driven-drupal
    online: true
  - name: DrupalCon Europe 2020
    date: 2020-12-08
    url: https://events.drupal.org/europe2020/sessions/tdd-test-driven-drupal
    online: true
  - name: DrupalCon Lille 2023
    location: Lille, France
    date: 2023-10-17
    time: "15:00 - 15:45"
    url: https://events.drupal.org/lille2023/session/tdd-test-driven-drupal-introduction-automated-testing-and-test-driven-development
  - name: DrupalCamp Belgium
    location: Ghent, Belgium
    date: 2024-05-10
    url: https://www.drupalcamp.be/en/drupalcamp-ghent-2024/session/tdd-test-driven-drup%E2%80%A6
---

Testing is important.

It allows developers to add new features and edit and refactor existing code without the worry of adding regressions, reduces the reliance on manual testing to discover bugs, and by taking a test-driven approach, your implementation code is leaner as you only write what is needed for your tests to pass.

Drupal 7 includes the SimpleTest module for unit and functional testing, whilst Drupal 8 also includes and supports PHPUnit - the defacto PHP testing framework used by other PHP projects, including Symfony and Laravel - making it easier for people to test their code.

With testing being one of the Drupal core gates, with tests needing to be included with every new feature or bug fix and core's 100% pass rate policy, testing has become an essential skill when contributing to the core or when working on your own projects.

In this talk, we'll cover the methodology and terminology involved with automated testing and then take a test-driven approach to create a new Drupal module.

P.S. If you want to learn more about automated testing and test-driven development in Drupal, [register for my free 10-day email course][course].

[course]: /atdc
