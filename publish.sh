#!/usr/bin/env bash

set -uex

SITE_ENV="prod"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`
TARGET_BRANCH="master"

# Build front-end assets.
npm run prod

# Remove the existing docs directory, build the site and create the new
# docs directory.
rm -rf ./docs
vendor/bin/sculpin generate --no-interaction --clean --env=${SITE_ENV}
touch output_${SITE_ENV}/.nojekyll
mv output_${SITE_ENV} docs

git config --local user.email "oliver@oliver@oliverdavies.uk"

if [ -z `git diff --exit-code` ]; then
    echo "No changes on this push. Exiting."
    exit 0
fi

# Add, commit and push the changes.
git checkout $TARGET_BRANCH
git add --all docs
git commit -m "Re-generate site. $SHA"
git push $SSH_REPO $TARGET_BRANCH
