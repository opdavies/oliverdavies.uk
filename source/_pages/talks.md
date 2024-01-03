---
title: Talks and Workshops
talk_count: 94
use:
  - talks
---

Starting with my first talk in September 2012, I have given {{ page.talk_count }} public presentations and workshops at various conferences and meetups, in-person and remotely, on topics including PHP, Drupal, automated testing, Git, CSS, and systems administration.

{% for talk in data.talks|sort((a, b) => a.events|last.date > b.events|last.date ? -1 : 1) %}
  <article>
    <div class="not-prose">
      <h2 class="text-xl font-bold">
        <a class="font-bold text-blue-primary dark:text-blue-400" href="{{ talk.url|trim('/', 'right') }}">{{ talk.title }}</a>
      </h2>
    </div>

    <p>{{ talk.description }}</p>
  </article>
{% endfor %}
