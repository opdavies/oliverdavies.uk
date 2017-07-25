#!/usr/bin/env bash

set -e

SITE_ENV="prod"
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

# Prepare the build directory.
git clone $REPO _deploy
pushd _deploy
git checkout master || git checkout --orphan master
popd
rm -rf ${BUILD_DIR}/**/* || exit 0

# Re-generate the site.
npm run prod
vendor/bin/sculpin generate --no-interaction --clean --env=prod
touch output_prod/.nojekyll

# Add, commit and push the changes.
mv output_prod/* _deploy
pushd _deploy
echo "!/assets/css/
!/assets/images/
!/assets/js/" > .gitignore
git add --all -f .
git commit -m "Re-generate site: `git rev-parse --verify HEAD`"
git push $SSH_REPO $TARGET_BRANCH
popd
