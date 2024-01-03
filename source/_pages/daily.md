---
title: Register for daily software development emails
---

{% block content %}
  Subscribe to my daily newsletter for software professionals on software development and delivery, DevOps, community, and open-source.

  {% include 'daily-email-form.html.twig' %}
{% endblock %}

{% block content_bottom %}
  {% include 'testimonials.html.twig' with {
    names: [
      'Alexander Carr',
      'Adam Nuttall',
      'Mike Karthauser',
      'Marcos Duran',
      'Stephen Mulvihill',
      'Patty O\'Callaghan',
    ],
    title: 'What subscribers have said',
  } %}

  {{ parent() }}
{% endblock %}
