---
title: Open Sublime Text 2 from the Mac OS X Command Line
tags:
  - sublime-text
  - mac-os-x
  - terminal
use: [posts]
---
{% block excerpt %}
How to open Sublime Text from the command line.
{% endblock %}

{% block content %}
Paste the following code into the Mac OS X Terminal, assuming that you've installed Sublime Text 2 into the /Applications folder.

```language-bash
$ ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/sublime
```

Now you can type `sublime <filename>` open a file or directory in Sublime Text, or `sublime .` to open the current directory.

You can also type `sublime --help` to see a list of the available commands.
{% endblock %}
