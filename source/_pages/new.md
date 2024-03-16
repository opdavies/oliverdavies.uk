---
title: Get Unlimited Drupal Consulting for a Fixed Monthly Price
meta:
    title: Unlimited Drupal Consulting by Oliver Davies
draft: true
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
---

{% block content %}

<div class="grid gap-8 md:grid-cols-2">
  {% for plan in page.plans %}
    <div>
      <h2>{{ plan.name }} - £{{ plan.price|number_format }}</h2>
      <div>
        <p>{{ plan.tagline }}</p>

        <ul>
          {% for feature in page.features|merge(plan.features) %}
            <li>{{ feature }}</li>
          {% endfor %}
        </ul>

        <footer class="grid place-items-center">
          {% include 'button.html.twig' with {
            text: 'Register now<span class="sr-only"> for the ' ~ plan.name|lower ~ ' plan</span>',
            url: plan.url,
            withArrow: true,
          } %}
        </footer>
      </div>
    </div>
  {% endfor %}
</div>

## What Does It Include?

## Looking for Something Else?

asdf
{% endblock %}

{% block content_bottom %}
  <div class="space-y-12">
    {% include 'testimonials' with {
      limit: 5,
      tag: 'subscription',
      title: 'Kind words from clients',
    } %}

    {{ parent() }}
  </div>
{% endblock %}
