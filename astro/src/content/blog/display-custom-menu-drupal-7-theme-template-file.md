---
title: Display a Custom Menu in a Drupal 7 Theme Template File
date: 2012-08-18
excerpt: The code needed to display a menu in a Drupal 7 template file.
tags:
    - aria
    - drupal
    - drupal-7
    - drupal-planet
    - php
---

For reference, this is the code needed to display a menu in a Drupal 7 template
file, including the navigation ARIA role.

```php
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
