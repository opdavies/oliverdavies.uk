---
title: Products and Services
products:
  -
    title: Development team coaching
    description: |
      Do you want to upskill your in-house team or have someone provide oversight and guidance as they deliver a project? Does your company want to learn to contribute to open-source software? Get unlimited 1-on-1 private Slack access to me and regular check-in calls to ensure things are on track.
    perMonth: true
    isLimited: true
    price: 10000
    remainingPlaces: 1
    link:
      text: Apply now
      url: /team-coaching
  -
    title: Drupal development subscription
    description: |
      In less time than it takes to post on a job board, and for a fraction of the cost, get unlimited access to a certified Drupal development expert, core contributor and multiple-time DrupalCon speaker for a fixed monthly fee. No surprises. Cancel anytime.
    perMonth: true
    price: 5000
    isFrom: true
    link:
      text: Register now
      url: /subscription
  -
    title: Drupal upgrade roadmap
    description: |
      Are you stuck on an already or soon-to-be unsupported version of Drupal? Get a personalised roadmap of your Drupal website, including details and actionable steps to upgrade it.
    price: 5000
    link:
      text: Book your roadmap now
      url: /drupal-upgrade
  -
    title: Diagnosis
    description: |
      An in-depth investigation into a single issue where I'll provide a report with my findings and advice on the next steps. Once you've purchased, you can book a Zoom call with me to discuss what you want me to investigate.
    price: 2500
    link:
      text: Book now
      url: https://buy.stripe.com/00gbJs84G2jg8Vy9AJ
  -
    title: Private talk or workshop
    description: |
      If you found one of my public speaking presentations or workshops useful, I'm available for private speaking engagements on a variety of topics to help your team succeed.
    price: 2000
    isFrom: true
    link:
      text: Schedule a talk
      url: https://buy.stripe.com/eVa4h0bgSaPM6NqcMU
  -
    title: 1-on-1 consulting call
    description: |
      Book a 1-on-1 video call, and I can help you by answering questions about software development, architecture and automation, helping you write your first automated test, or reviewing some of your code and giving advice and suggestions.
    price: 350
    link:
      text: Book your call now
      url: /call
  -
    title: Pair program with me
    description: |
      Would you like another pair of eyes on your code, providing real-time suggestions and feedback rather than waiting for a code review? Book a 2-hour pair programming call and we can work on your code together.
    price: 499
    link:
      text: Book your session now
      url: /pair
  -
    title: Introduction to Automated Testing in Drupal - 7-day email course
    description: |
      Register for my free email course on automated testing in Drupal.
    link:
      text: Register now
      url: /atdc
  -
    title: Drupal module template
    description: |
      If you're creating a new Drupal module, try starting with my free module template for Drupal 9 and 10.
    link:
      text: Download
      url: https://github.com/opdavies/drupal-module-template
---

{% block content %}

{% for product in page.products %}

  <article>
    <h2>
      {{ product.title }} -
      {{ product.isFrom ? 'from' }}
      {% if product.price %}
        £{{ product.price|number_format() }}
      {% else %}
        free!
      {% endif %}
      {{ product.perMonth ? 'per month' }}
    </h2>

    <div>
      <p>
        {{ product.description }}

        {% if product.remainingPlaces == 1 %}
          <strong>1 place remaining!</strong>
        {% elseif product.remainingPlaces > 1 %}
          <strong>{{ product.remainingPlaces }} places remaining!</strong>
        {% elseif product.isLimited %}
          <strong>Limited places available!</strong>
        {% endif %}
      </p>
    </div>

    <footer>
      <a href="{{ product.link.url }}">
        {{ product.link.text }}
        &rarr;
      </a>
    </footer>
  </article>
{% endfor %}
{% endblock %}

{% block content_top %}
  {% include 'message.html.twig' %}
{% endblock %}
