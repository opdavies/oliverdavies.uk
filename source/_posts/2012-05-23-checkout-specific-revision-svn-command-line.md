---
title: Checkout a specific revision from SVN from the command line
tags:
  - svn
  - version-control
use: [posts]
---
{% block excerpt %}
How to checkout a specific revision from a SVN (Subversion) repository.
{% endblock %}

{% block content %}
If you're checking out the repository for the first time:

```language-bash
$ svn checkout -r 1234 url://repository/path
```

If you already have the repository checked out:

```language-bash
$ svn up -r 1234
```

{% endblock %}
