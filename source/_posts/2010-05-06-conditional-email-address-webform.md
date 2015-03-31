---
title: Conditional Email Addresses in a Webform
nav: blog
use:
  - posts
slug: conditional-email-addresses-webform
tags:
  - Drupal Planet
  - Drupal 6
  - Conditional Email
  - Webform
---
I created a new Webform to serve as a simple Contact form, but left the main configuration until after I created the form components. I added 'Name', 'Email', 'Subject' and 'Message' fields, as well as a 'Category' select list. Below 'Options', I entered each of my desired options in the following format:

    Email address|Visible name

I went back to the form configuration page and expanded 'Conditional Email Recipients', and selected my Category. Note that the standard 'Email To' field above it needs to be empty. Originally, I made the mistake of leaving addresses in that field which resulted in people being sent emails regardles of which category was selected. I then configured the rest of the form.

Then, when I went to the finished form, the category selection was available.