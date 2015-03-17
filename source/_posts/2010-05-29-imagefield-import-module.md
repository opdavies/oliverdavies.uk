---
title: Quickly Import Multiples Images Using the Imagefield_Import Module
nav: blog
slug: quickly-import-multiples-images-using-imagefieldimport-module
tags:
  - Drupal Planet
  - ImageField Import
  - Drupal 6
  - Photo Gallery
  - CCK
  - ImageField
---
<strong>Thanks to Bob at <a href="http://mustardseedmedia.com/">Mustardseed Media</a> for <a href="http://twitter.com/mustardseedinc/status/14713096905">tweeting</a> about this module. It's undoubtedly saved me hours of work today alone!</strong>

I've recently started a personal project converting a website to Drupal. It's currently a static HTML/CSS site which also uses the <a href="http://coppermine-gallery.net/">Coppermine Photo Gallery</a>. As part of building the new website, I wanted to move all the photos from the existing site onto the new one. However, with 1260 photos in 17 albums, this could have been a lengthy process!

I created a new Drupal-powered Gallery as described in <a href="http://lullabot.com/articles/photo-galleries-views-attach">this screencast</a> by <a href="http://twitter.com/eaton">Jeff Eaton</a> - using the CCK and Imagefield modules, and re-created each of my existing Gallery nodes. Using the <a href="http://drupal.org/project/imagefield_import">Imagefield_Import</a> module, I was then able to quickly import the photos into the new Galleries.

I downloaded all the photos from the previous Gallery via FTP, and installed and configured the Imagefield_Import module.

I created an 'Import' folder, selected the target field and mode. In this case, I want each image to be imported into its own Photo node. I moved the photos for the first album into the Import folder, and loaded the 'Import Images' screen <em>(admin/content/imagefield_import)</em>.

After clicking 'Import', a node is created for each photo, the image is uploaded, and added to the selected Gallery.

Just another 1248 photos to go...
