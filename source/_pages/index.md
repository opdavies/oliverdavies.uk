---
title: Do you need a certified Drupal expert, core contributor and module maintainer?
permalink: /
meta:
  title: '%site.slogan% | %site.name%'
---

{% block meta_title %}Certified Drupal expert, Developer and Consultant | {{ site.name }}{% endblock %}

{% block content %}

{% import 'macros' as macros %}

Hi, I'm Oliver. I'm an Acquia-certified Drupal Triple Expert and Software Development Consultant with {{ macros.yearsExperience }} years of experience.

I'm a Drupal core contributor, module and theme maintainer, former Developer for the Drupal Association, and multiple-time DrupalCon speaker.

## What I can help you with

If you have a Drupal application, register for a [Drupal development subscription][subscription] and have unlimited access to an expert Drupal developer for a fixed monthly price.

If you are stuck on an unsupported version of Drupal, such as 7, 8 or 9, and need help upgrading, [book a Drupal upgrade consultation call][call] or [roadmap for your website][roadmap].

If you need help or another pair of eyes on your code, book a [1-on-1 consultation call][call] or an [online pair programming session][pair] with me, with a 100% money-back guarantee.

If your team wants to write better software faster, I'm available for [development team coaching][team coaching].

## Looking for something else?

Here are all of my [products and services][pricing]. If you still can't find what you need, [send me an email](mailto:oliver+website@oliverdavies.uk), and I'll see what I can do.
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    title: 'Kind words from clients, subscribers, and past colleagues',
    merge: true,
    names: ["Matthieu Scarset"],
  } %}

  {% include 'daily-email-form.html.twig' with {
    title: 'Register for daily software development emails',
    intro: 'Sign up and get daily emails about Drupal, PHP and software development.',
  } %}

  {{ parent() }}
{% endblock %}

[call]: {{site.url}}/call
[pair]: {{site.url}}/pair
[roadmap]: {{site.url}}/roadmap
[pricing]: {{site.url}}/pricing
[subscription]: {{site.url}}/subscription
[team coaching]: {{site.url}}/team-coaching
