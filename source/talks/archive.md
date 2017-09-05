---
layout: page
title: Talk Archive
use: [talks]
---
Here are a list of my previous conference and user group talks:

{% set events = [] %}

{% for date in site.events.dates|reverse %}
    {% if date.date >= 'today'|date('Y-m-d') %}
    {% else %}
        {% set events = events|merge([{
            date: date,
            event: site.events.events[date.event],
        }]) %}
    {% endif %}
{% endfor %}

{% include 'talks-table' %}

Upcoming talks can be found on the [talks page][0].

[0]: {{site.url}}/talks
