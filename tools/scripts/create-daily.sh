#!/usr/bin/env bash

set -euo pipefail

if [ "${1}" == "next" ]; then
  next_date=$(ls -1 src/content/daily-email | tail -n 1 | tr -d '.md' | xargs -I {} date +%Y-%m-%d -d '{} +1 day')
else
  next_date="${1}"
fi

filepath="src/content/daily-email/${next_date}.md"

shift 1

# Generate the title and slug.
title="${*}"
slug=$(echo "${title}" | awk '{print tolower($0)}' | tr ' ' '-')

# Create the file.
cp -f --no-clobber stub.md "${filepath}"

date=$(date -d "${next_date}" +%Y-%m-%d)
day=$(date -d "${next_date}" +%d)
month=$(date -d "${next_date}" +%m)
year=$(date -d "${next_date}" +%Y)

# Replace the placeholders.
sed -i "s/{{ date }}/${date}/" "${filepath}"
sed -i "s/{{ title }}/${title}/" "${filepath}"
sed -i "s#{{ permalink }}#archive/${year}/${month}/${day}/${slug}#" "${filepath}"

# Create a commit with the appropriate date in the message
git add "${filepath}"
git commit -m "daily-email: add ${date}

${title}"

echo "${filepath}"
