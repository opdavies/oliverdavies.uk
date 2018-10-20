---
title: Display a Custom Menu in a Drupal 7 Theme Template File
description: For reference, this is the code needed to display a menu in a Drupal 7 template file.
tags:
  - drupal
  - drupal-7
  - drupal-planet
  - php
  - aria
use: [posts]
---
{% block excerpt %}
For reference, this is the code needed to display a menu in a Drupal 7 template file, including the navigation ARIA role.
{% endblock %}

{% block content %}
```language-php
$menu_name = 'menu-footer-menu';
$menu_id = 'footer-menu';
print theme('links', array(
  'links' => menu_navigation_links($menu_name),
  'attributes' => array(
     'id' => $menu_id,
     'role' => 'navigation',
     'class'=> array('links', 'inline')
  )
));
```
{% endblock %}
