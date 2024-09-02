---
title: Presentations
use: [presentations]
---

Since September 2012, I have given {{ get_presentation_count(data.presentations) }} public talks and workshops at various conferences and meetups, in-person and remotely, on topics including PHP, Drupal, automated testing, Git, CSS, and systems administration.

{% for talk in data.presentations|sort((a, b) => a.events|last.date|date('U') > b.events|last.date|date('U') ? -1 : 1) %}
  <article>
    <div class="not-prose">
      <h2 class="text-xl font-bold">
        <a class="font-bold text-blue-primary dark:text-blue-400" href="{{ talk.url|trim('/', 'right') }}">{{ talk.title }}</a>
      </h2>
    </div>

    <p>{{ talk.description }}</p>
  </article>
{% endfor %}
