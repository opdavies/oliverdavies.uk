---
title: Talks and Workshops
use: [talks]
---

{% set talkCount = 0 %}
{% for talk in data.talks %}
  {% for event in talk.events if 'today'|date('U') >= event.date|date('U') %}
    {% set talkCount = talkCount + 1 %}
  {% endfor %}
{% endfor %}

Since September 2012, I have given {{ get_past_talk_count(data.talks) }} public presentations and workshops at various conferences and meetups, in-person and remotely, on topics including PHP, Drupal, automated testing, Git, CSS, and systems administration.

{% for talk in data.talks|sort((a, b) => a.events|last.date|date('U') > b.events|last.date|date('U') ? -1 : 1) %}
  <article>
    <div class="not-prose">
      <h2 class="text-xl font-bold">
        <a class="font-bold text-blue-primary dark:text-blue-400" href="{{ talk.url|trim('/', 'right') }}">{{ talk.title }}</a>
      </h2>
    </div>

    <p>{{ talk.description }}</p>
  </article>
{% endfor %}
