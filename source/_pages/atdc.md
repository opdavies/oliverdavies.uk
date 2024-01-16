---
title: Introduction to Automated Testing in Drupal email course
---

{% block content %}

Do you want to learn how to write automated tests and do test-driven development in Drupal?

Register below for my free 10-day email course, where you'll learn to write a new Drupal module from scratch with automated tests.

Learn to test things like:

* Whether pages exist.
* Whether users can view specific pages based on their permissions.
* Whether certain content is visible on a page given particular circumstances.
* Refactoring code to test dedicated classes such as Services, Repositories, Builders and Actions.

{% include 'email-course-form.html.twig' %}
{% endblock %}

{% block content_bottom %}
  <div class="space-y-12">
    {% include 'testimonials' with { tag: 'testing' } %}

    {{ parent() }}
  </div>
{% endblock %}
