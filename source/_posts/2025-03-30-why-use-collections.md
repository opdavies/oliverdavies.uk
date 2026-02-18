---
title: Why use Collections?
permalink: daily/2025/03/30/why-collections
tags:
  - software-development
  - php
  - collections
cta:
snippet: |-
  Why should you use Collection objects in PHP?
---

Yesterday, I wrote how to create [dependency free Collection classes in PHP][0] (thanks to Dan Leech).

I said that [I've written blog posts][1] and [given talks][2] on using Collection classes.

But why do I like Collections and why may you want to use them instead of native arrays?

The first reason is that I can add extra functionality to Collections, because they're objects.

Whether it's a generic action such as filtering or sorting the items, or something more specific like returning a list of station codes from a collection of train stations, this can be added to specific collection classes.

I'll usually have an `AbstractCollection` that has the generic methods and is extended by specific Collection types with methods more specific methods.

Having specific types of Collection objects also gives my code more context.

Instead of an array that could contain anything, by reading the code and seeing which Collection types are used, I know what the collection contains and what I can do with it.

This is also why I like value objects.

Giving objects specific names instead of relying on the language's primitive types makes the code more robust and easier to read and understand.

[0]: {{site.url}}/daily/2025/03/29/collections
[1]: {{site.url}}/blog/using-laravel-collections-drupal
[2]: {{site.url}}/presentations/using-illuminate-collections-outside-laravel
