---
title: Finding the last commit that a patch applies to
excerpt: How to find the last commit in a Git repository that a patch applies to.
date: 2020-03-26
tags: [bash, git]
draft: true
---

```bash
#!/usr/bin/env bash

# https://www.drupal.org/files/issues/2018-08-28/group-configurable-entities-as-group-content-2797793-58.patch

patch_filename=group-configurable-entities-as-group-content-2797793-58.patch
first_commit=6e8c22a
last_commit=8.x-1.x

find_commits_between() {
  first_commit=$1
  last_commit=$2

  git rev-list --reverse --ancestry-path $first_commit^...$last_commit
}

reset_repo() {
  git reset --hard $1 >& /dev/null
}

apply_patch() {
  git apply --check $patch_filename >& /dev/null
}

for sha1 in $(find_commits_between $first_commit $last_commit); do
  echo "Trying ${sha1}..."

  reset_repo $sha1
  apply_patch

  if [[ $? -eq 0 ]]; then
    echo "Patch applies"
    continue
  fi

  echo "Patch does not apply"
  exit 1
done
```
