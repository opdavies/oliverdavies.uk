---
title: Change the Content Type of Multiple Nodes Using SQL
nav: blog
slug: change-content-type-multiple-nodes-using-sql
tags:
  - Drupal Planet
  - Drupal 6
  - SQL
  - Sequel Pro
  - Database
  - Content Types
---
In this post, I will be changing values within my Drupal 6 site's database to quickly change the content type of multiple nodes. I will be using a test development site with the core Blog module installed, and converting Blog posts to a custom content type called 'News article'.

**Before changing any values within the database, ensure that you have an up-to-date backup which you can restore if you encounter a problem!**

To begin with, I created the 'News article' content type, and then used the Devel Generate module to generate some Blog nodes.

Using <a href="http://www.sequelpro.com/">Sequel Pro</a>, I can query the database to view the Blog posts (you can also do this via the <a href="http://guides.macrumors.com/Terminal">Terminal</a> in a Mac OS X/Linux, <a href="http://www.oracle.com/technology/software/products/sql/index.html">Oracle SQL Developer</a> on Windows, or directly within <a href="http://www.phpmyadmin.net/home_page/index.php">phpMyAdmin</a>):

Using an SQL 'Update' command, I can change the type value from 'blog' to 'article'. This will change every occurance of the value 'blog'. If I wanted to only change certain nodes, I could add a 'Where' clause to only affect nodes with a certain nid or title.

Now, when I query the database, the type is shown as 'article'.

Now, when I go back into the administration section of my site and view the content, the content type now shows at 'News article'.
