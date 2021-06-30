---
title: How to add a date popup calendar onto a custom form
date: 2012-05-23
excerpt: How to use a date popup calendar within your custom module.
tags:
  - forms
  - form-api
  - date
  - calendar
  - drupal-7
  - drupal-planet
  - drupal
---

How to use a date popup calendar within your custom module.

First, I need to download the
[Date](http://drupal.org/project/date 'Date module on Drupal.org') module, and
make my module dependent on date_popup by adding the following line into my
module's .info file.

```language-ini
dependencies[] = date_popup
```

Within my form builder function:

```language-php
$form['date'] = array(
  '#title' => t('Arrival date'),

  // Provided by the date_popup module
  '#type' => 'date_popup',

  // Uses the PHP date() format - http://php.net/manual/en/function.date.php
  '#date_format' => 'j F Y',

  // Limits the year range to the next two upcoming years
  '#date_year_range' => '0:+2',

  // Default value must be in 'Y-m-d' format.
  '#default_value' => date('Y-m-d', time()),
);
```
