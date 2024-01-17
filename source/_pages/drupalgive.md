---
title: My Drupal Contributions
modules:
  -
    name: Block ARIA Landmark Roles
    machine_name: block_aria_landmark_roles
    type: module
    usage: 1346
    stars: 16
  -
    name: Copyright Block
    machine_name: copyright_block
    type: module
    usage: 2514
    stars: 10
  -
    name: Feature Toggle Twig
    machine_name: feature_toggle_twig
    type: module
  -
    name: Layout Builder Extra Templates
    machine_name: override_node_options
    type: module
    usage: 325
    stars: 11
  -
    name: Null User
    machine_name: null_user
    type: module
    usage: 5
    stars: 4
  -
    name: System User
    machine_name: system_user
    type: module
  -
    name: Tailwind CSS Starter Kit
    machine_name: tailwindcss
    type: theme
    usage: 260
---

[This is my profile page on Drupal.org](https://www.drupal.org/u/opdavies) and these are some of the projects I maintain:

<ul>
  {% for project in page.modules|sort((a, b) => b.usage <=> a.usage) %}
    <li>
      {{ project.type|capitalize }}:
      <a href="https://www.drupal.org/project/{{ project.machine_name }}">{{ project.name }}</a>
      {% if project.usage %}
        - {{ project.usage|number_format }} websites
        {%- if project.stars -%}
          , {{ project.stars }} {{ project.stars == 1 ? 'star' : 'stars' }}
        {% endif %}
      {% endif %}
    </li>
  {% endfor %}
</ul>

## Example Projects on GitHub

- [Docker Example Drupal](https://github.com/opdavies/docker-example-drupal)
- [Docker Example Drupal Commerce Kickstart](https://github.com/opdavies/docker-example-drupal-commerce-kickstart)
- [Docker Example Drupal LocalGov](https://github.com/opdavies/docker-example-drupal-localgov)

## Events

- I was a speaker at DrupalCon Lille in October 2023.
- I was a speaker at DrupalCon Europe 2020 (online).
- I was a workshop trainer at DrupalCamp NYC 2020 (online).
- I was a workshop trainer at DrupalCamp London 2020 (online).
- I was a speaker at DrupalCon Amsterdam in October 2019.
- I was a contribution day mentor at DrupalCon Vienna 2017.
- I was a speaker at DrupalCamp Dublin 2017.
- I was a speaker at DrupalCamp Bristol 2016.
- I was an organiser of DrupalCamp Bristol (2016, 2017, 2019).
- I was a contribution day mentor at DrupalCon Los Angeles and Barcelona 2015.
- I was a speaker at DrupalCamp North 2015.
- I was a speaker at DrupalCamp Brighton 2015.
- I was a contribution day mentor at DrupalCon Amsterdam 2014.
- I was a speaker at DrupalCamp London (2014, 2015, 2016, 2017, 2019).
- I was a volunteer at DrupalCamp London 2014.
- I was a contribution day mentor at DrupalCon Prague 2013.
- I was an organiser of the South Wales Drupal user group (SWDUG) and Drupal Bristol user group.

## Other

- I'm a Board Member of the [Drupal England and Wales Association](https://drupal-england-wales.github.io) (DEW).
