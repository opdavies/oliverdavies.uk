---
title: The Beyond Blocks podcast
meta:
  description: A podcast about Drupal, PHP open-source and software development.
use:
  - podcast_episodes
---

{% block content_bottom %}{% endblock %}

{% block content %}
A podcast about Drupal, PHP, open-source, and related software development topics.
Guests include people like [Matt Glaman](/podcast/1-retrofit), [Eirik Morland](/podcast/8-eirik-morland-violinist), [Tim Lehnen](/podcast/9-tim-lehnen), [Ryan Szrama](/podcast/13-ryan-szrama-centarro), [Sam Mortenson](/podcast/19-sam-mortenson) and [Jess Archer](/podcast/25-jess-archer-drush-laravel-prompts).

## Episodes {.sr-only}

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
