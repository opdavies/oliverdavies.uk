---
layout: default
meta:
  description: 'The personal website and blog of Oliver Davies, a Drupal Developer and System Administrator from Wales, UK.'
  og:
    title: 'Oliver Davies - Drupal Developer'
    description: 'The personal website and blog of Oliver Davies, a Drupal Developer and System Administrator from Wales, UK.'
    type: website
    image:
      url: /assets/images/oliver.jpg
      width: 327
      height: 327
      type: image/jpg
---
{% block body_classes 'page--about' %}

{% block content %}
# About

<img src="{{ site.gravatar.url }}?s=85" alt="Picture of Oliver" class="img-circle">

Hi, I'm Oliver Davies, a <a href="{{ site.drupalorg.nice }}">Drupal Developer</a> and System Administrator based in Newport, South Wales. I’m a Senior Developer at [Microserve](https://microserve.io), while also working freelance on Drupal websites and Linux servers. I previously worked for the [Drupal Association](https://assoc.drupal.org), as well as other UK agencies such as [Precedent](http://precedent.com) and [Nomensa](http://www.nomensa.com).

An active community member, I organise <a href="{{ site.meetups.swdug.url }}">SWDUG</a> and co-organise <a href="{{ site.meetups.drupalbristol.url }}">Bristol Drupal</a>, and am a founding member of the [DrupalCamp Bristol](http://2015.drupalcampbristol.co.uk) organising committee (we held our first event in July 2015). I also attend other events and conferences related to Drupal, PHP, Linux and web accessibility.

I'm contributor to <a href="http://cgit.drupalcode.org/drupal/log/?h=7.x&qt=grep&q={{ site.drupalorg.name }}">Drupal 7</a> and <a href="http://cgit.drupalcode.org/drupal/log/?h=8.0.x&qt=grep&q={{ site.drupalorg.name }}">Drupal 8</a> core, and I <a href="{{ site.drupalorg.url }}/people-mentored">mentor new contributors</a> online and in person at local sprints, DrupalCamps and DrupalCons. I maintain several projects on Drupal.org, and have contributed to numerous others.

I'm also the Git Documentation Maintainer for the Drupal project, and a provisional member of the [Drupal Security team](https://www.drupal.org/security-team).

You can follow me on <a href="{{ site.twitter.url }}">Twitter</a> and <a href="{{ site.linkedin.url }}">LinkedIn</a>, and you can view my code on <a href="{{ site.drupalorg.url }}/track/code">Drupal.org</a> and <a href="{{ site.github.url }}?tab=activity">GitHub</a>.
{% endblock %}
