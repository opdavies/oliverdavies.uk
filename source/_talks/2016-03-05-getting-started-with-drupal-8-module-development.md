---
nav: talks
title: Getting Started with Drupal 8 Module Development
type: conference
event:
    name: DrupalCamp London 2016
    website: http://drupalcamp.london
    location: London, UK
tags:
    - conference
    - php
    - drupal
    - drupalcamp
    - drupal-8
tweets: yes
code: https://github.com/opdavies/dclondon16-d8-module
slides: https://speakerdeck.com/opdavies/getting-started-with-drupal-8-module-development
date: 2016-03-05 14:00
meta:
    og:
        title: Getting Started with Drupal 8 Module Development
        image:
            url: 'https://www.oliverdavies.uk/assets/images/talks/dclondon16.png'
            type: 'image/png'
            height: 540
            width: 960
---
{% block abstract %}
New to object-orientated PHP, Symfony or YAML, and want to get started building modules in Drupal 8? This is the session for you!

In this session, we’ll cover:

* Where Drupal 8 modules are located, and how they are structured.
* How to build a simple module, including our own permissions and routes.
* How to add your own controller and service classes.
* What is the service/dependency injection container, and how do we use it?
* How we can use tools such as PhpStorm and Drupal Console to speed up the process.

What we won’t be covering:

* Automated testing in PHPUnit or Simpletest.
* Adding third party libraries and external dependencies via Composer.
{% endblock %}

{% block slides %}
{{ speakerdeck('0041804e52664d12a8e31cd118264813', '1.77777777777778') }}
{% endblock %}

{% block feedback %}
{{ tweet('<a href="https://twitter.com/opdavies">@opdavies</a> good talk on Getting started with Drupal 8 module development! 😀</p>&mdash; Michael trestianu (@Tresti88) <a href="https://twitter.com/Tresti88/status/706129843134570496">March 5, 2016</a>') }}
{{ tweet('<a href="https://twitter.com/opdavies">@opdavies</a> Great talk. Thanks.</p>&mdash; John Bloomfield (@jbloomfield) <a href="https://twitter.com/jbloomfield/status/706131469148811264">March 5, 2016</a>') }}
{{ tweet('<a href="https://twitter.com/opdavies">@opdavies</a> definitely went well , I learnt from it , as did a others .</p>&mdash; tim marsh (@timmarsh) <a href="https://twitter.com/timmarsh/status/706214342027567104">March 5, 2016</a>') }}
{% endblock %}
