---
title: A reason why I like static site generators
permalink: daily/2025/05/03/like
tags:
  - software-development
  - linux
  - static-site-generators
cta: ~
snippet: |
  Here's an example of how I use command line tools 
---

Static site generators [like Sculpin][0] don't have a database like Drupal.

The files are the database.

In [my website repository][3], the `source/_presentations` directory contains the files for my presentation pages, so these could be considered the presentations table and rows.

But, because my content is in plain text files, they're very easy and quick to search in a text editor or on the command line using tools like `grep`.

It's very easy and fast for me to find an old daily email, blog post or article I've written when I need to.

This is also why I use [rst2pdf for my presentation slides][1] and write them in reStructured text. It's very fast to find and re-use content.

## Counting my presentations

Another example is being able to quickly count the number of presentations I've given.

Here's an example of the front matter section from one of my presentations:

```markdown
events:
  - name: PHP South West
    date: 2024-02-14
    location: Bristol, UK
    urls:
      video: https://www.youtube.com/watch?v=axy6ltc9meA
      demo: https://phpsw-sculpin-demo.oliverdavies.uk
  - name: BrumPHP
    date: 2024-05-23
    location: Birmingham, UK
    url: https://www.eventbrite.com/e/brumphp-23rd-may-2024-tickets-803037766577
  - name: PHP Berkshire
    date: 2024-08-28
    location: Reading, UK
    urls:
      slides: /files/presentations/sculpin/php-berkshire.pdf
      website: https://www.meetup.com/php-berkshire/events/301850284
  - name: PHP Thames Valley
    date: 2026-03-20
    location: Oxford, UK
    urls:
      slides: /files/presentations/sculpin/php-thames-valley.pdf
      code: https://code.oliverdavies.uk/opdavies/sculpin-demo/src/branch/php-thames-valley
      website: https://www.meetup.com/php-thames-valley/events/305915971
```

Each presentation has a list of events, as most presentations I've given multiple times.

Each event has a `date` that I can extract with `grep`:

```plain
grep -r "date:" source/_presentations/*.md

source/_presentations/tdd-test-driven-drupal.md:    date: 2020-12-08
source/_presentations/tdd-test-driven-drupal.md:    date: 2023-10-17
source/_presentations/tdd-test-driven-drupal.md:    date: 2024-05-10
source/_presentations/tdd-test-driven-drupal.md:    date: 2024-11-20
source/_presentations/test-drive-twig-with-sculpin.md:    date: 2015-07-25
source/_presentations/things-you-should-know-about-php.md:    date: 2019-01-28
source/_presentations/things-you-should-know-about-php.md:    date: 2022-03-09
source/_presentations/things-you-should-know-about-php.md:    date: 2023-01-12
source/_presentations/upgrading-your-site-drupal-9.md:    date: 2020-09-02
source/_presentations/upgrading-your-site-drupal-9.md:    date: 2020-09-23
source/_presentations/upgrading-your-site-drupal-9.md:    date: 2021-04-22
source/_presentations/using-illuminate-collections-outside-laravel.md:    date: 2017-12-21
source/_presentations/using-illuminate-collections-outside-laravel.md:    date: 2018-08-28
source/_presentations/working-without-workspace.md:    date: 2023-04-06
source/_presentations/working-with-workspace.md:    date: 2020-08-11
source/_presentations/working-with-workspace.md:    date: 2020-09-09
source/_presentations/working-with-workspace.md:    date: 2021-02-02
```

To count them, I can add `| wc -l` to count the number of lines.

But what if I have presentations in the future I don't want to count?

To show just the dates, I can pipe the output to `awk` and only print the last item:

```plain
grep -r "date:" source/_presentations/*.md | awk '{ print $NF }'

2020-12-08
2023-10-17
2024-05-10
2024-11-20
2015-07-25
2019-01-28
2022-03-09
2023-01-12
2020-09-02
2020-09-23
2021-04-22
2017-12-21
2018-08-28
2023-04-06
2020-08-11
2020-09-09
2021-02-02
```

I can sort them by adding `| sort`, but that doesn't matter in this case.

To remove any future presentations, I can pass the current date to `awk`, filter based on the date and count the number of lines in the result:

```plain
grep -r "date:" source/_presentations/*.md | awk -v today="$(date +%Y-%m-%d)" '{ if ($NF < today) print $NF }' | wc -l

104
```

This isn't how I'm calculating this on my website (I'm using a [custom Twig extension in Sculpin][2] for that), but this is an example of how multiple command line utilities can work together to perform a task - made possible using the static files from my website.

[0]: {{site.url}}/presentations/sculpin
[1]: {{site.url}}/presentations/rst2pdf
[2]: {{site.url}}/daily/2025/05/02/extend
