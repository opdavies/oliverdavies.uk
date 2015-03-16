---
title: Checkout a specific revision from SVN from the command line
slug: checkout-specific-revision-svn-command-line
tags:
  - SVN
  - Version control
---
If you're checking out the repository for the first time:

    svn checkout -r 1234 url://repository/path

If you already have the repository checked out:

    svn up -r 1234