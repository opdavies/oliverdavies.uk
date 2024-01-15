---
title: Introduction to Automated Testing and Test-Driven Development with Drupal
testimonials:
  - Tawny Bartlett
  - Mike Karthauser
  - Scott Euser
drupal_version: 10
prices:
  early: 395
  full: 495
is_early_bird: true
next_date: 2022-04-04
---

Are you a Drupal Developer who wants to learn about automated testing and test-driven development, or do you manage a development team that you'd like to train?

I've delivered large Drupal projects using automated tests and test-driven development for custom functionality, and maintain Drupal modules with thousands of installations whilst using their tests to ensure working code and prevent regressions.

I offer an interactive full-day workshop (previously presented at DrupalCamp London, and remotely for DrupalCamp NYC) that provides an introduction to automated testing in Drupal and how to utilise test-driven development - which I've updated specifically for Drupal {{ page.drupal_version }}.

## Contents

- What is automated testing, and why write tests?
- What types of tests are available in Drupal?
- Outside-in vs. inside-out testing.
- Configuring Drupal and PHPUnit to run tests locally.
- Exercise: writing tests for existing Drupal core functionality.
- Exercise: adding tests to an existing custom module.
- What is test-driven development?
- Exercise: writing a new Drupal module from scratch with test-driven development.
- Q&A

<hr />

## Dates and prices

The workshop is currently only available remotely, and the next available date is <span class="font-bold">{{ page.next_date|date('F jS, Y') }}</span>.

Seats are available at <span class="font-bold">{{ page.is_early_bird ? 'an early bird price of £' ~ page.prices.early : 'a price of £' ~ page.prices.full }}</span>, with a 10% discount for bulk orders of 5 or more seats.

{% include 'button.html.twig' with {
  text: 'Book your seat &rarr;',
  url: 'https://buy.stripe.com/6oE3cW4Su7DA1t6144',
} %}

<hr />

{% include 'testimonials' with { tag: 'testing' } %}
