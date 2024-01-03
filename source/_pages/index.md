---
layout: default
title: Do you need a certified Drupal expert, core contributor and module maintainer?
permalink: /
---

{% block content %}

Hi, I'm Oliver. I'm an Acquia-certified Drupal Triple Expert and Software Development Consultant with {{ site.yearsExperience }} years of experience.

## What I can help you with

Register for a [monthly Drupal development subscription][subscription] and have an expert Drupal developer working on your application. Get unlimited requests for a fixed monthly price.

If you are stuck on an unsupported version of Drupal, such as 7, 8 or 9, and don't know what's involved in upgrading, [book a Drupal upgrade consultation call][call] or [roadmap for your website][roadmap].

If you need help or another pair of eyes on your code, book a [1-on-1 consultation call][call] or an [online pair programming session][pair] with me, with a 100% money-back guarantee.

If you want to learn to write better software faster, I'm available for [development team coaching][team coaching].

## Looking for something else?

Here are all of my [products and services][pricing]. If you still can't find what you need, [send me an email](mailto:oliver+website@oliverdavies.uk), and I'll see what I can do.
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    title: 'Kind words from clients, subscribers, and past colleagues',
  } %}

  {% include 'about-me.html.twig' %}
{% endblock %}

[call]: {{site.url}}/call
[pair]: {{site.url}}/pair
[roadmap]: {{site.url}}/roadmap
[pricing]: {{site.url}}/pricing
[subscription]: {{site.url}}/subscription
[team coaching]: {{site.url}}/team-coaching
