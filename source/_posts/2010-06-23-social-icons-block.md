---
title: Create a Block of Social Media Icons using CCK, Views and Nodequeue
slug: create-block-social-media-icons-using-cck-views-and-nodequeue
tags:
  - Drupal Planet
  - Drupal 6
  - Views
  - Nodequeue
  - oliverdavies.co.uk
---
I recently decided that I wanted to have a block displayed in a sidebar on my site containing icons and links to my social media profiles - <a href="http://twitter.com/opdavies">Twitter</a>, <a href="http://facebook.com/opdavies">Facebook</a> etc. I tried the <a href="http://drupal.org/project/follow">Follow</a> module, but it lacked the option to add extra networks such my <a href="http://drupal.org/user/381388">Drupal.org</a> account, and my <a href="http://oliverdavies.co.uk/rss.xml">RSS feed</a>. I started to create my own version, and then found <a href="http://www.hankpalan.com/blog/drupal-themes/add-your-social-connections-drupal-icons">this Blog post</a> by Hank Palan.

 I created a 'Social icon' content type with the body field removed, and with fields for a link and image - then downloaded the favicons from the appropriate websites to use. 

However, instead of using a custom template (node-custom.tpl.php) file, I used the Views module.

I added fields for the node titles, and the link from the node's content. Both of these are excluded from being displayed on the site. I then re-wrote the output of the Icon field to create the link using the URL, and using the node's title as the image's alternative text and the link's title.

I also used the <a href="http://drupal.org/project/nodequeue">Nodequeue</a> module to create a nodequeue and arrange the icons in the order that I wanted them to be displayed. Once this was added as a relationship within my View, I was able to use node's position in the nodequeue as the sort criteria.

To complete the process, I used the <a href="http://drupal.org/project/css_injector">CSS Injector</a> module to add some additional CSS styling to position and space out the icons.