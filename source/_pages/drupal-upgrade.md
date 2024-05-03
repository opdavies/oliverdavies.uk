---
title: Are you stuck on Drupal 7, 8 or 9?
button:
    text: Book your roadmap now
    url: https://buy.stripe.com/aEU4h0gBc4ro0p27sz
---

{% import 'macros' as macros %}

{# Pain #}

Drupal 7 will be unsupported on the **5th of January 2025**.

Drupal 8 has been unsupported since **November 2021**, and Drupal 9 since **November 2023**.

Are you stuck on any of these versions?

* Do you need to upgrade your website before it reaches its end-of-life date and is no longer supported?
* Are you worried about rebuilding your website and migrating your data to Drupal 10?
* Is all of your business logic embedded within your Drupal code, making it hard to upgrade?
* Do you rely on modules or themes that are no longer updated or don't exist for Drupal 10?

{# Dream #}

## What if you had a clear path how to upgrade your website?

* What if you had a recommended approach to upgrade your website to Drupal 10?
* What if you knew about potential issues ahead of time?
* What if you had a list of modules to use in Drupal 10, alternatives for any missing modules, and what functionality would need custom code?

{# Fix #}

## Drupal upgrade roadmap

An upgrade roadmap is a personalised audit of your Drupal website and includes details and actionable steps to upgrade it, including identifying potential blockers you might encounter.

{# 1st call to action #}

{% include 'button.html.twig' with {
  text: page.button.text ~ ' ',
  url: page.button.url,
  withArrow: true,
} %}

## How does it work?

* After receiving payment, we will arrange an initial call to discuss your project.
* You share your source code and provide access to your website.
  * I'll need access to the source code for your website. Ideally, this is via GitHub, GitLab, Bitbucket, or whatever online version control you currently use, but I can also audit a zip file of your Git repository.
  * I'll need a user account to access your website to review its configuration, such as content types, user roles, etc. You can delete this once the engagement is complete.
  * Alternatively, I can use an export of the database to get a local version of your site up and running. Ideally, this would be sanitised to remove personal information such as usernames, email addresses and passwords.
* I'll send you the document once it's complete for you to review.
* We'll arrange a follow-up call to go through it in detail and for you to ask any questions.

{# 2nd CTA #}

{% include 'button.html.twig' with {
  text: page.button.text,
  url: page.button.url,
  withArrow: true,
} %}

{# Social proof #}

{% include 'testimonials.html.twig' %}

{# Overcome objections #}

{# Uniqueness #}

## Who am I?

* I'm an Acquia-certified Drupal expert with {{ get_years_of_experience() }} years of professional development experience.
* I'm a former Drupal Association employee who was responsible for improving and maintaining Drupal.org.
* I'm a Drupal core contributor and maintain numerous Drupal projects, including the Override Node Options module, which is used on over 38,000 websites.
* I'm a multiple-time DrupalCon speaker who regularly presents talks and workshops at conferences and meetups.

{# Urgency #}

## Availability is limited

There will be no further extensions of Drupal 7 support, and I have limited availability due to the time required, so buy now to secure your place.

{% include 'button.html.twig' with {
  text: page.button.text ~ ' &rarr;',
  url: page.button.url,
} %}
