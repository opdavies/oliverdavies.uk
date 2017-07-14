---
layout: default
title: About
meta:
    description: 'The personal website and blog of Oliver Davies, a Drupal Developer and System Administrator from Wales, UK.'
    og:
        title: 'Oliver Davies - Drupal Developer'
        description: 'The personal website and blog of Oliver Davies, a Drupal Developer and System Administrator from Wales, UK.'
        type: website
use: [posts, testimonials]
redirect:
    - about/
    - consulting/
---
{% block content %}
# About Me

<img src="{{ site.images_url }}{{ site.avatar.url }}" alt="Picture of Oliver" class="me img-circle">

My name is Oliver Davies (aka [opdavies][1]) - a Web Developer and System Administrator based in Wales, UK. I’m a PHP specialist and [Acquia certified Drupal Developer][41], a {{ site.work.role }} at [{{ site.companies[site.work.company].name }}][20], former Developer at the [{{ site.companies.drupal_association.name }}][39], part-time freelancer, open source contributor and advocate, mentor and conference speaker.

I’m a provisional member of the [Drupal Security team][14] and a webmaster and documentation maintainer for Drupal.org. [I speak at various user groups and conferences][40], and co-organise the [Drupal Bristol user group][15], [PHPSW][17] and [DrupalCamp Bristol][18].

## Skills

{% include 'skills-list' with { skills: site.skills[0] } %}

## Elsewhere

- [Twitter][21] - @{{ site.twitter.name }}
- [Drupal.org][22]
- [GitHub][23]
- [Packagist][24]
- [Ansible Galaxy][25]
- [Joind.in][33]
- [Speaker Deck][26]
- [LinkedIn][27]
- [YouTube][28]
- [Reddit][36]
- [Stack Overflow][37]
- [Disqus][38]
- IRC (freenode) - {{ site.irc.name }}
{% endblock %}

{% block stylesheets %}
<link rel="stylesheet" href="{{ site.url }}/assets/css/about.css">
{% endblock %}

[1]: https://www.google.com/#q=opdavies
[2]: https://www.drupal.org
[3]: http://symfony.com
[4]: http://git-scm.com
[5]: https://en.wikipedia.org/wiki/Linux
[6]: http://www.ansible.com
[7]: https://assoc.drupal.org
[8]: https://www.microserve.io
[9]: http://precedent.com
[10]: http://www.nomensa.com
[11]: https://www.drupal.org/u/opdavies/issue-credits/3060
[12]: https://www.drupal.org/project/user/381388
[13]: https://www.drupal.org/user/381388/people-mentored
[14]: https://www.drupal.org/security-team
[15]: https://www.drupalbristol.org.uk
[16]: https://groups.drupal.org/wales-uk
[17]: https://phpsw.uk
[18]: https://www.drupalcampbristol.co.uk
[19]: {{site.url}}/talks/
[20]: {{site.companies[site.work.company].url}}
[21]: {{site.twitter.url}}
[22]: {{site.drupalorg.url_new}}
[23]: {{site.github.url}}
[24]: {{site.packagist.url}}
[25]: {{site.ansible_galaxy.url}}
[26]: {{site.speakerdeck.url}}
[27]: {{site.linkedin.url}}
[28]: {{site.youtube.channel_url}}
[29]: http://silex.sensiolabs.org
[30]: https://laravel.com
[31]: https://sculpin.io
[32]: https://docs.puppet.com/guides/faq.html#what-is-puppet
[33]: {{site.joindin.url}}
[34]: https://www.ctidigital.com
[35]: {{site.wordpress.url}}
[36]: https://www.reddit.com/user/opdavies
[37]: http://stackoverflow.com/users/3012648/opdavies
[38]: https://disqus.com/by/opdavies
[39]: {{site.companies.drupal_association.url}}
[40]: {{site.url}}/talks
[41]: http://certification.acquia.com/registry?fname=Oliver&lname=Davies&city=Newport&state=Wales&country=United+Kingdom&org=&exam=All
