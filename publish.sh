#!/usr/bin/env bash

set -uex

SITE_ENV="prod"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`
SOURCE_BRANCH="source"
TARGET_BRANCH="master"

# Build front-end assets.
npm run prod

git config --local user.email "oliver@oliverdavies.uk"

vendor/bin/sculpin generate --no-interaction --clean --env=${SITE_ENV}
touch output_${SITE_ENV}/.nojekyll

# Add, commit and push the changes.
cd output_${SITE_ENV}
cp -R ../.git .
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
git add --all .
git commit -m "Re-generate site. $SHA"
git push $SSH_REPO $TARGET_BRANCH
