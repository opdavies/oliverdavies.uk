---
title: Drupal Development Subscription
supported_version: 10
plans:
  -
    name: Standard
    price: 5000
    tagline: One concurrent request. Cancel anytime.
    features:
      - One request at a time.
    url: https://buy.stripe.com/8wM14OgBc2jg8Vy3cn
  -
    name: Pro
    price: 9000
    tagline: Two concurrent requests. Cancel anytime.
    features:
      - Two requests at a time.
    url: https://buy.stripe.com/9AQaFo0CeaPM3BecMY
features:
  - Bug-free guarantee.
  - Delivery in days, not weeks.
  - Easy credit card or BACS payments.
  - Cancel at any time.
faqs:
  -
    - Which versions of Drupal do you work on?
    - |-
      I only work on the latest supported version of Drupal core, which is currently Drupal %supported_version%.

      If you have an application that uses an older version, I'm happy to give you a custom fixed-price proposal to upgrade to Drupal %supported_version%.
  -
    - Does this include maintenance tasks, such as updating Drupal core and contrib modules and themes?
    - |-
      Yes, updates are included and will need to be prioritised along with other requests.

      My suggestion is to do them regularly to reduce the risk of an update breaking your application.
  -
    - Is there a limit to how many requests I can have?
    - |-
      No. Once you're subscribed, you can add as many tasks to your queue as you'd like, and they'll be delivered one-by-one.

      You can move requests around and set your own project priority to ensure your most important tasks are finished first.
  -
    - How fast will I receive my completed requests?
    - |-
        Of course no two user stories or requests are the same, and some take longer than others.

        However, you'll typically start getting code back from me within days of submitting an active request.

        Software development is an iterative process, so I will break big projects into smaller tasks and start sending work-in-progress for review, feedback, and iteration.
  -
    - Who are the Developers?
    - |-
      I am! I won't pass your work to Junior Developers or offshore teams. You work directly with me. Always.
  -
    - How do I request tasks?
    - |-
      After subscribing, you'll need to give me access to your GitLab or GitHub repository and issues board. From there, assign as many tasks to me as you like, in priority order.
  -
    - What if I don't like how something turned out?
    - |-
      Development is an iterative process. Unlike an agency that will charge you extra for change orders, you get unlimited revisions until you’re happy with the work.
  -
    - What if I only have a single request?
    - |-
      Your subscription renews on a monthly basis. If you only have a single request, you are free to cancel your subscription after the first month.

      You can always renew again in the future, if you have a new request!
  -
    - How does the bug free guarantee work?
    - |-
      If you discover a bug in any code I delivered, for up to 6 months after the end of your subscription, I will fix it for free.
  -
    - Will you attend our daily stand-ups, or other recurring meetings?
    - |-
      No. To guard your time and mine, and to make your subscription as effective as possible, all communication is handled asynchronously via task requests, email, and/or Slack. If an occasional task requires some synchronous planning, we can schedule such calls on an as-needed basis.
  -
    - Do you have a refund policy?
    - |-
      Yes, of course. If you're unhappy with my work for any reason during your first month of service, just say the word, and I'll give you a full refund. No questions asked.
---

{% block content %}

 In less time than it takes to post on a job board, and for a fraction of the cost, get unlimited access to a certified Drupal development expert, core contributor and multiple-time DrupalCon speaker for a fixed monthly fee. No surprises. Cancel anytime.

---

## You're already running my code in production

I've contributed code to Drupal core and written popular contributed Drupal modules and themes, PHP and JavaScript libraries, and Tailwind CSS plugins.

---

## How it works

### Make as many requests as you like

Unlimited user stories. Unlimited tasks. Unlimited repos. Unlimited services.

### You set the priority

You decide what's most important. Change priorities at any time.

### Get code in days, not weeks

I work on one active request at a time, and start shipping code in days. Bigger projects will be broken down into smaller parts.

### Satisfaction guaranteed

Great software is an iterative process. I'll keep iterating with you until you're completely happy with the results.

---

## Subscription benefits

When you subscribe, you gain access to a number of unique benefits.

### Fixed monthly rate

No surprises. No missed quotes. No surprise invoices. Pay the same price each month.

### Speedy delivery

I work in small increments, so you'll begin seeing valuable code changes in mere days.

### Quality guaranteed

High quality code that just works. Or I fix it, for free!

---

## Subscription plans

{% for plan in page.plans %}
  <div>
    <strong>
      <h3>
        {{ plan.name }}:
        £{{ plan.price|number_format }} per month
      </h3>
    </strong>

    <p>{{ plan.tagline }}</p>

    <ul>
      {% for feature in plan.features|merge(page.features) %}
        <li>{{ feature }}</li>
      {% endfor %}
    </ul>

    <footer class="mt-6">
      {% include 'button.html.twig' with {
        text: 'Register now for the ' ~ plan.name|lower ~ ' plan &rarr;',
        url: plan.url,
      } %}
    </footer>
  </div>
{% endfor %}

---

## Book a free call

And we'll figure out what's best for you.

{% include 'button' with {
  text: 'Get in touch &rarr;',
  type: 'secondary',
  url: 'https://savvycal.com/opdavies/subscription',
} %}

---

{% include 'testimonials' with {
  limit: 5,
  tag: 'subscription',
  title: 'Kind words from clients',
} %}

---

## Frequently asked questions

{% for faq in page.faqs %}
  <h3>{{ faq.0 }}</h3>

  {{ faq.1|markdown }}
{% endfor %}

---

{% include 'testimonials' with {
  tag: 'subscription',
  offset: 5,
  title: 'More kind words from clients and colleagues',
} %}

{% endblock %}

{% block content_top %}
  {% include 'message.html.twig' %}
{% endblock %}
