---
date: 2025-01-10
title: Just use curl
permalink: daily/2025/01/10/curl
tags:
  - software-development
  - linux
cta: sponsor
snippet: |-
  I don't use complicated or bloated applications to test HTTP requests and API endpoints. I just use curl.
---

I don't use complicated or bloated applications to test HTTP requests and API endpoints.

I just use `curl` on my command line.

For example, if I want to query the Drupal.org API for my user information, I can run `curl https://www.drupal.org/api-d7/user.json?uid=381388` and see the response.

To see the request and response headers, status code, SSL certificate information and more, I can run `curl -v` to run it in verbose mode.

If the response returns JSON, I can use `jq` to format the results.

If I need to make a POST request, I can use `-X POST`, I can use `--data` or `--json` to send data and `--header` to send any required headers.

curl is great program with so many options and no AI bloat, complicated UIs or paid plans.

Want to see what else it can do?

Just open your terminal and type `man curl`.
