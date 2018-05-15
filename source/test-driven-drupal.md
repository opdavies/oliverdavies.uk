---
layout: page
title: 'Test Driven Drupal: The Book'
mailchimp_url: 'https://oliverdavi.us18.list-manage.com/subscribe/post?u=b4ac8dd177796d37b93f9c285&amp;id=033c84e0d5'
contact_email: 'oliver@testdrivendrupal.com'
---
Having [given talks][1] and [written blog posts][0] about automated testing in Drupal, I’m currently in the planning phase of a book and potentially some accompanying screencasts about it, focussing on Drupal 8.

I’m still thinking about what use-cases to cover and examples to include, but here are some of the things I’m considering:

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

I’ll most likely be publishing it via Leanpub, and will be sending free chapters, early-bird discounts and links to screencasts and blog posts as I write the book to subscribers of the mailing list.

If you have questions or would like to suggest something for me to include in the book, please <a href="mailto:{{ page.contact_email }}">contact me</a>.

## Mailing List

Enter your email address to subscribe to the Test Driven Drupal mailing list.

<div id="mc_embed_signup">
    <form action="{{ page.mailchimp_url }}" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate p-0" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
            <div class="mc-field-group w-full lg:w-1/2 pb-3 font-bold">
                <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
                </label>
                <input type="email" value="" name="EMAIL" class="required email p-3" id="mce-EMAIL" style="text-indent: 0">
            </div>
            <div id="mce-responses" class="clear p-0 m-0">
                <div class="response p-0" id="mce-error-response" style="display: none"></div>
                <div class="response p-0" id="mce-success-response" style="display: none"></div>
            </div>
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b4ac8dd177796d37b93f9c285_033c84e0d5" tabindex="-1" value=""></div>
            <div class="clear"><button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="bg-blue text-white border-0 px-4 py-3 m-0">Subscribe</button>
            </div>
        </div>
    </form>
</div>
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

[0]: {{site.url}}/blog/tags/testing
[1]: {{site.url}}/talks/tdd-test-driven-drupal
[2]: {{site.url}}/contact
