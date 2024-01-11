---
title: Introduction to Automated Testing in Drupal email course
---

{% block content %}
  Register below for my free 7-day email course on automated testing in Drupal:

  {% include 'email-course-form.html.twig' %}
{% endblock %}

{% block content_bottom %}
  <div class="space-y-12">
   {% include 'testimonials.html.twig' with {
    names: [
      "Mike Karthauser",
      "Tawny Bartlett",
      "Scott Euser",
      ]
    } %}

    {{ parent() }}
  </div>
{% endblock %}
