---
title: Sign up for the Daily Drupaler Email List
meta:
  title: The Daily Drupaler - Daily Software Development Thoughts and Tips | %site.name%
  description: |-
    Daily software development thoughts and tips by %site.name%.
use: [daily_emails]
---

{% block content %}
  Subscribe to my daily newsletter for software professionals on software development and delivery, Drupal, DevOps, community, and open-source.

  {% include 'daily-email-form.html.twig' %}

  <section>
    <h2>Still not sure?</h2>

    <p>These are the emails I sent this week:</p>

    <ul>
      {% for email in data.daily_emails[:7] %}
        <li><a href="{{ email.url }}">{{ email.title }}</a></li>
      {% endfor %}
    </ul>
  </section>
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    tag: 'daily',
    title: 'What subscribers have said',
  } %}

  {{ parent() }}
{% endblock %}
