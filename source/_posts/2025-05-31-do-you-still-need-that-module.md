---
date: 2025-05-31
title: Do you still need that module?
permalink: /daily/2025/05/31/do-you-still-need-module
---

<p>If a module or library has been added to an application, it was done to serve a purpose.</p><p>It must add some required functionality that was asked for earlier in the application''s lifecycle.</p><p>It was needed then.</p><p>But it is still needed now?</p><p>Are the original requirements still valid?</p><p>Have they changed or are no longer needed?</p><p>If the code is no longer serving a purpose, it should be removed.</p><p>Common culprits in Drupal projects are the Feeds and Migrate modules, which are used to import data from external sources, such as legacy applications when migrating to Drupal.</p><p>Once the data has been imported and the site is live, the modules are often so longer needed.</p><p><a href="/daily/2025/05/30/do-you-need-module">As I said yesterday</a>, having less code in your application will make it easier to maintain and upgrade in the future, so keep it as lean and minimal as possible - but this is an ongoing process as requirements change over time.</p>
