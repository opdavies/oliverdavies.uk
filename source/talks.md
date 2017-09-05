---
layout: default
title: Talks
meta:
    description: 'Information about previous and upcoming talks that Oliver has presented at conferences and user groups'
use: [talks, posts]
redirect:
    - speaking/
---
{% block content %}
# Talks

I regularly speak at conferences and user groups about a range of subjects including Drupal, Sculpin and Git. If you would like to me to speak at your group or conference, please [get in touch][0].

There is also information about events that I’ve attended and spoken at on my [Lanyrd][1] and [Joind.in][2] profiles.

{% set upcoming_events = [] %}
{% set past_events = [] %}

{% for date in site.events.dates %}
    {% if date.date >= 'today'|date('Y-m-d') %}
        {% set upcoming_events = upcoming_events|merge([{
            date: date,
            event: site.events.events[date.event],
            talks: data.talks,
        }]) %}
    {% else %}
        {% set past_events = past_events|merge([{
            date: date,
            event: site.events.events[date.event],
            talks: data.talks,
        }]) %}
    {% endif %}
{% endfor %}

{% if upcoming_events is not empty %}
## Upcoming Talks

{% include 'talks-table' with { events: upcoming_events, upcoming: true } %}
{% endif %}

## Last 5 Talks

{% include 'talks-table' with { events: past_events|reverse|slice(0,5) } %}

You can view more talks in the [talks archive][3].
{% endblock %}

[0]: {{site.url}}/contact
[1]: {{site.lanyrd.url}}
[2]: {{site.joindin.url}}
[3]: {{site.url}}/talks/archive
