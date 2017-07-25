#!/usr/bin/env bash

set -e

SITE_ENV="prod"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
BUILD_DIR="_deploy"

# Prepare the build directory.
git clone $REPO $BUILD_DIR
pushd $BUILD_DIR
git checkout master || git checkout --orphan master
popd
rm -rf ${BUILD_DIR}/**/* || exit 0

# Re-generate the site.
npm run prod
vendor/bin/sculpin generate --no-interaction --clean --env=prod
touch output_prod/.nojekyll

# Add, commit and push the changes.
pushd $BUILD_DIR
mv ../output_prod/* .
git add -A .
git commit -m "Re-generate site: `git rev-parse --verify HEAD`"
git push $SSH_REPO master
popd
