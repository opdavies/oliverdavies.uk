---
title: The Beyond Blocks podcast
use:
  - podcast_episodes
---

{% block content_bottom %}{% endblock %}

{% block content %}
A weekly podcast about Drupal, open-source, and related software development topics.

Subscribe at <https://feeds.transistor.fm/beyond-blocks>.

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

  <a href="{{ episode.url|trim('/', 'right') }}">
    Listen now
    <span class="sr-only">to episode {{ episodeNumber }} with {{ episode.guests.0 }}</span>
    &rarr;
  </a>
{% endfor %}
{% endblock %}
