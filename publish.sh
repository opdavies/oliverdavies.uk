#!/usr/bin/env bash

set -e

SITE_ENV="prod"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`
SOURCE_BRANCH="source"
TARGET_BRANCH="master"
BUILD_DIR=".build"

# Prepare the build directory.
# git clone $REPO $BUILD_DIR
mkdir -p $BUILD_DIR
cp -R .git $BUILD_DIR
pushd $BUILD_DIR
git fetch
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
popd
rm -rf ${BUILD_DIR}/**/* || exit 0

# Re-generate the site.
npm run prod
vendor/bin/sculpin generate --no-interaction --clean --env=${SITE_ENV}
touch output_${SITE_ENV}/.nojekyll

# Add, commit and push the changes.
mv output_${SITE_ENV}/* $BUILD_DIR
pushd $BUILD_DIR
git add --all .
git commit -m "Re-generate site: $SHA"
git push $SSH_REPO $TARGET_BRANCH
popd

rm -rf $BUILD_DIR
