---
title: Parsing a large XML file with xq
tags: [linux, development]
date: 2026-02-11
---

Here is how I used [xq] to parse a 34MB, 773,623 line XML file - retrieving only the fields I needed from a filtered list of items:

```bash
xq -x '.StationList.Station[]
  | select(.StationCode | IN ("ABE", "CDF"))
  | {StationCode, StationAlerts}' stations.xml
```

Adding `-x` returns the text as XML instead of JSON.

It runs in only a few seconds and returns exactly what I need.

[xq]: https://github.com/mikefarah/yq
