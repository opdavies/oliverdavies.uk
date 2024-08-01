---
title: 'Test Driven Drupal: The Book'
mailchimp_url: 'https://oliverdavi.us18.list-manage.com/subscribe/post?u=b4ac8dd177796d37b93f9c285&amp;id=033c84e0d5'
contact_email: 'oliver@testdrivendrupal.com'
---

{% block content %}

<!-- prettier-ignore -->
<div class="markup spaced-y-4 mb-6" markdown="1">
Having [given talks][1] and [workshops][workshop], been a guest on podcasts and [written articles][0] about automated testing in Drupal, I’m currently in the planning phase of a book and potentially some accompanying screencasts about it, focussing on Drupal 8.

I’m still thinking about what use-cases to cover and examples to include, but
here are some of the things I’m considering:

- What things to test, and what not to test
- The different types of available tests, and when to use each
- How to write testable code
- What happens when I run a test?
- How to run tests in the Drupal UI
- How to run tests with the `run-tests.sh` script
- How to install, configure and run tests with PHPUnit in Drupal 8
- Viewing HTML from run tests
- How to write your first test
- Debugging tests
- How to organise your test files
- Selecting the right base class and using test traits
- Writing your own base test classes, traits and assertions
- Managing dependencies for your tests (fields, configuration)
- Creating users, checking access with roles and permissions
- Creating pages and blocks with Views and testing the output
- Creating pages with routes and controllers and testing the output
- Testing custom plugins
- Testing queuing items and processing queues
- Testing sending emails
- Testing custom Twig filters and functions
  <!-- - Testing data migrations -->
  <!-- - Building and testing APIs using RESTful web services module -->
- Running tests as part of your continuous integration pipeline

I’ll most likely be publishing it via Leanpub, and will be sending free
chapters, early-bird discounts and links to screencasts and blog posts as I
write the book to subscribers of the mailing list.

If you have questions or would like to suggest something for me to include in
the book, please <a href="mailto:{{ page.contact_email }}">contact me</a>.

**Enter your email address to subscribe to the Test Driven Drupal mailing list
and be notified of any updates.**

</div>

{% include 'pages/book/signup-form' %}

<!-- prettier-ignore -->
{% endblock %}

[0]: /articles/tags/testing
[1]: /talks/tdd-test-driven-drupal
[2]: /contact
[workshop]: https://web.archive.org/web/20200422110605/https://drupalcamp.london/training/Automated-Testing-and-Test-Driven-Development-in-Drupal-8