---
title: Oliver Davies - Software Developer and Consultant, PHP and Drupal specialist
permalink: /
is_front: true
exclude_from_sitemap: true
meta:
    description: Oliver Davies is a UK-based Software Developer and Consultant, specialising in Drupal, PHP, and JavaScript.
---

{% set thisYear = 'today'|date('Y') %}
{% set yearsOfExperience = thisYear - site.experience.start_year %}

<div class="markdown" markdown="1">
<div class="mb-4 w-32"><img src="{{ site.avatar.path }}" alt="Picture of Oliver" class="rounded-full border border-gray"></div>
Hi, I’m Oliver. I’m a Full Stack Software Consultant based in South Wales in the UK.

I architect, develop, and consult on large web applications, and work with organisations, agencies, and freelance Developers to improve their code quality by using tools and workflows such as continuous integration and deployment, automated testing, test-driven development, and static analysis.

I have {{ yearsOfExperience }} years of software development and Drupal experience, have worked for the Drupal Association, and am an <a href="https://certification.acquia.com/user/4540">Acquia-certified Drupal expert</a>. I also work with complementary technologies such as Symfony, Vue.js, TypeScript, Docker, and Ansible.

I enjoy writing and contributing open-source code which you can find on my [Drupal.org] and [GitHub] profiles.

I regularly <a href="/talks">present talks and workshops</a> at user groups and conferences and am the organiser of the <a href="https://www.phpsouthwales.uk">PHP South Wales</a> user group.

<a href="/contact">Contact me</a> if you’d like any more information or to discuss a project.
</div>

[drupal.org]: {{site.drupalorg.url}}
[github]: {{site.github.url}}
