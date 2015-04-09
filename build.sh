#!/bin/bash

set -x

rm -rf ./output_prod
/usr/local/bin/sculpin generate --env=prod

LOG=$(git log --oneline -n 1)

rm -rf ./gh-pages-deployment/
git clone git@github.com:opdavies/opdavies.github.io.git ./gh-pages-deployment/

pushd ./gh-pages-deployment/

git checkout -B master

rsync --quiet --archive --filter="P .git*" --delete ../output_prod/ ./

git add -A .
git commit -m "${LOG}"
git push origin master --force

popd