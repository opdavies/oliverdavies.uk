---
title: Sign up for the Daily Drupaler Email List
meta:
  title: The Daily Drupaler - daily software development thoughts and tips | %site.name%
  description: |-
    Daily software development thoughts and tips by %site.name%.
---

{% block content %}
  Subscribe to my daily newsletter for software professionals on software development and delivery, Drupal, DevOps, community, and open-source.

  {% include 'daily-email-form.html.twig' %}
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    tag: 'daily',
    title: 'What subscribers have said',
  } %}

  {{ parent() }}
{% endblock %}
