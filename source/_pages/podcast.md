---
title: The Beyond Blocks podcast
meta:
  description: A weekly podcast about Drupal, PHP open-source and software development.
use:
    - podcast_episodes
---

{% block content_bottom %}{% endblock %}

{% block content %}
A weekly podcast about Drupal, PHP, open-source, and related software development topics.

Subscribe at <a href="{{ site.transistor.feed.url }}">{{ site.transistor.feed.url }}</a>.

## Episodes

{% for episode in data.podcast_episodes|reverse %}
  {% set episodeNumber = episode.url|trim('/')|split('/')|last|split('-')|first %}

  <h3>
    Episode {{ episodeNumber }}:
    {{ episode.topic }}
    with {{ episode.guests.0 }}
  </h3>

  <time datetime="{{ episode.date|date('Y-m-d') }}">{{ episode.date|date('F jS, Y') }}</time>

  {{ episode.blocks.content|markdown }}

  <a href="{{ episode.url|trim('/', 'right') }}" aria-label="Listen to episode {{ episodeNumber }}">
    Listen now
    &rarr;
  </a>
{% endfor %}
{% endblock %}
