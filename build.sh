#!/bin/bash

set -x

SCULPIN='/usr/local/bin/sculpin'
ENV='prod'
BRANCH='master'
REPO="git@github.com:opdavies/opdavies.github.io.git --branch ${BRANCH}"
DEPLOY_DIR='./gh-pages-deployment'

rm -rf ./output_${ENV}
${SCULPIN} generate --env=${ENV}

LOG=$(git log --oneline -n 1)

rm -rf ${DEPLOY_DIR}
git clone ${REPO} ${DEPLOY_DIR}

pushd ${DEPLOY_DIR}

git checkout -B ${BRANCH}

rsync --quiet --archive --delete ../output_${ENV}/ ./

git add -A .
git commit -m "${LOG}"
git push origin ${BRANCH} --force

popd