---
date: 2025-07-25
title: Drupal roles are layerable
permalink: /daily/2025/07/25/drupal-roles-are-layerable
---

A common issue I see on Drupal websites is that [users have too many permissions][1].

They are often given a role like an Administrator that gives them too many options - sometimes introducing a security risk or the possibility of [taking a website down accidentally][0].

A thing about Drupal roles is that they are layerable.

A user can have multiple roles and get the combined permissions from each role.

So why not have a number of small specific roles and assign them to users as needed, rather than a small number of larger roles that give too much?

[0]: /daily/2025/07/24/permissions-issue-took-down-website
[1]: /daily/2025/07/23/its-hard-take-things-away
