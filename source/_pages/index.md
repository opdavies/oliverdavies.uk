---
title: Do you need a Drupal expert to improve your website or development team?
permalink: /
meta:
    title: '%site.slogan% | %site.name%'
---

{% block meta_title %}Drupal Strategist, Consultant and certified Drupal expert | {{ site.name }}{% endblock %}

{% block content %}

{% import 'macros' as macros %}

Hi, I'm Oliver - a certified Drupal Expert and Software Development Consultant with {{ macros.yearsExperience }} years of experience.

I'm a Drupal core contributor, module and theme maintainer, former Developer for the Drupal Association, and multiple-time DrupalCon speaker.

{% include 'button' with {
    position: 'centre',
    text: 'Click here to email Oliver',
    url: 'mailto:' ~ site.email,
    withArrow: true,
} %}

## What I can help you with

If you have a Drupal application, register for a [Drupal development subscription][subscription] and have unlimited access to an expert Drupal developer for a fixed monthly price.

If you are stuck on an unsupported version of Drupal, such as 7, 8 or 9, and need help upgrading, [book a Drupal upgrade consultation call][call] or [roadmap for your website][roadmap].

If you need help or another pair of eyes on your code, book a [1-on-1 consultation call][call] or an [online pair programming session][pair] with me, with a 100% money-back guarantee.

If your team wants to write better software faster, I'm available for [development team coaching][team coaching].

## Looking for something else?

Here are [all my products and services][pricing]. If you still can't find what you need, [send me an email](mailto:oliver+website@oliverdavies.uk), and I'll see what I can do.
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials' with {
    tag: 'front',
    title: 'Kind words from clients, subscribers, and past colleagues',
  } %}

  <section>
      <h2 class="font-bold text-xl">Get in touch</h2>
      <div class="mt-4 grid gap-4">
        <div class="{{ site.prose_classes }}">
            <p>There's no reason to wait. Send me an email and I'll get back to you ASAP.</p>
        </div>
        <div>
            {% include 'button' with {
                position: 'centre',
                text: 'Click here to email Oliver',
                url: 'mailto:' ~ site.email,
                withArrow: true,
            } %}
        </div>
      </div>
  </section>

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
