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

<img src="{{ site.gravatar.url }}?s=100" alt="Picture of Oliver" class="img-circle">

Hi, I'm Oliver Davies, a Web Developer and System Administrator based in Newport, South Wales. I specialise in PHP development with <a href="{{ site.drupalorg.url_nice }}">Drupal</a> and <a href="http://sculpin.io">Sculpin</a>, and Linux system administration. I’m also currently learning Symfony2 framework and Silex.

You can follow me on <a href="{{ site.twitter.url }}">Twitter</a> and <a href="{{ site.linkedin.url }}">LinkedIn</a>, and you can view my code on <a href="{{ site.drupalorg.url }}/track/code">Drupal.org</a> and <a href="{{ site.github.url }}?tab=activity">GitHub</a>.

I’m currently a Senior Developer at [Microserve](https://microserve.io) - a specialist Drupal development agency based in Bristol. I previously worked for the [Drupal Association](https://assoc.drupal.org), and for other UK agencies such as [Precedent](http://precedent.com) and [Nomensa](http://www.nomensa.com), in permanent and contract positions.

I still occasionally work on freelance projects in my spare time - please [get in touch](/contact/) for any more information.

I'm a contributor to <a href="http://cgit.drupalcode.org/drupal/log/?h=7.x&qt=grep&q={{ site.drupalorg.name }}">Drupal 7</a> and <a href="http://cgit.drupalcode.org/drupal/log/?h=8.0.x&qt=grep&q={{ site.drupalorg.name }}">Drupal 8.0.x</a> core, as well as to other open-source projects including [COD](http://usecod.io) (the conference organising distribution, built on Drupal), Sculpin (a static site generator written in PHP), various Puppet modules and Ansible roles, and the [Drupal VM](http://www.drupalvm.com) project.

I maintain several contrib projects on Drupal.org, and have contributed to numerous others - including several relating to Drupal.org itself, such as [Bluecheese](http://cgit.drupalcode.org/bluecheese/log/?qt=author&q=Oliver+Davies) (the Drupal.org theme) and the [Drupal.org customisations](http://cgit.drupalcode.org/drupalorg/log/?qt=author&q=Oliver+Davies) module.

<a href="{{ site.drupalorg.url }}/people-mentored">I mentor new Drupal contributors</a> online and in person at local sprints, DrupalCamps and DrupalCons, and have helped several new contributors to get their first commits to Drupal core.

I'm also the [Git Documentation Maintainer](https://www.drupal.org/node/2248627#comment-8887789) for the Drupal project, and a provisional member of the [Drupal Security team](https://www.drupal.org/security-team).

I organise Drupal user group events such as talk nights and code sprints in <a href="{{ site.meetups.swdug.url }}">South Wales</a> and <a href="{{ site.meetups.drupalbristol.url }}">Bristol</a>, and am a founding [DrupalCamp Bristol](http://2015.drupalcampbristol.co.uk) organising committee member. I also regularly attend and speak at other meetups and conferences related to Drupal, PHP, Linux, DevOps, and web development and accessibility.
{% endblock %}
