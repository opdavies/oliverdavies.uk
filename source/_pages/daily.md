---
title: Register for daily software development emails
---

{% block content %}
  Subscribe to my daily newsletter for software professionals on software development and delivery, DevOps, community, and open-source.

  {% include 'daily-email-form.html.twig' %}
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    tag: 'daily',
    title: 'What subscribers have said',
  } %}

  {{ parent() }}
{% endblock %}
