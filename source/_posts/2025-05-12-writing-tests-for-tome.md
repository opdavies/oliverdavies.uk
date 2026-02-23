---
date: 2025-05-12
title: Writing tests for Tome
permalink: /daily/2025/05/12/writing-tests-tome
---

<p>I have recently <a href="/daily/2025/05/11/email-archive-tome">migrated my daily email archive</a> to Drupal and Tome.</p><p>The result is the same - a static website that I can upload onto my server, but it's created with Drupal 11 locally and exported to a static website.</p><p>Similar to being able to <a href="/daily/2025/05/02/extend">extend Sculpin with PHP</a>, I get the same benefit with Tome.</p><p>I can write the same PHP code and custom Drupal modules as I would with a non-Tome Drupal website.</p><p>To count the number of sent daily emails, I created a <code>opd_daily_emails</code> module with a token that generates the number of emails, and displays it on the page.</p><p>I can also write the same automated tests.</p><p>I have a functional test that confirms the token result is generated and rendered correctly using <code>TokenTestTrait</code> - supported by some kernel tests and a custom <code>DailyEmailTestTrait</code> that makes it easier to create daily email nodes within the tests.</p><p>I have all the power and flexibility of Drupal locally and the benefits of a static site when it's deployed.</p><p>P.S. If you want to learn how to write automated tests in Drupal, subscribe to <a href="/atdc">my free 10-day email course</a>.</p>
