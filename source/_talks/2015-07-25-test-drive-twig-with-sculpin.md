---
nav: talks
title: Test Drive Twig with Sculpin
type: conference
event:
    name: DrupalCamp North 2015
    website: http://drupalcampnorth.org
    location: Sunderland, UK
slides: https://speakerdeck.com/opdavies/test-drive-twig-with-sculpin
code: https://github.com/opdavies/sculpin-demo
tags:
    - conference
    - drupalcamp
    - drupalcamp-north
    - sculpin
    - twig
tweets: yes
---
{% block abstract %}
[Sculpin](https://sculpin.io) is a static site generator written in PHP, and based on [Symfony components](http://symfony.com/doc/current/components/index.html). It uses [YAML](http://yaml.org/) and [Twig](http://twig.sensiolabs.org/), which makes it very appealing to Drupal people wanting to learn these in preparation for Drupal 8.

This session covered how to install Sculpin itself, as well as how to use it to build a static site from Markdown, HTML and Twig templates. We also covered Sculpin concepts such as content types, themes and partials, and Twig layouts, blocks and inheritance, as well as some tips and tricks that I've found whilst developing with Sculpin.
{% endblock %}

{% block slides %}
{{ speakerdeck('54589d2e50a3476a9a75aed809e9edf1', '1.77777777777778')|raw }}
{% endblock %}

{% block feedback %}
<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">Twig said &#39;foo&#39;, then Sculpin said &#39;bar&#39;. They agreed to go spaceless ;-)&#10;&#10;Interesting talk by <a href="https://twitter.com/opdavies">@opdavies</a> &#10;<a href="https://twitter.com/hashtag/dcnorth15?src=hash">#dcnorth15</a> <a href="http://t.co/26GmhiCdfJ">http://t.co/26GmhiCdfJ</a></p>&mdash; Stefan van Hooft (@hooftio) <a href="https://twitter.com/hooftio/status/624898550158200832">July 25, 2015</a></blockquote>
{% endblock %}
