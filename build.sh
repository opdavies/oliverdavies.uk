#!/bin/bash

set -x

SCULPIN='/usr/local/bin/sculpin'
ENV='prod'
REPO='git@github.com:opdavies/opdavies.github.io.git'
BRANCH='master'
BUILD_DIR='./gh-pages-deployment/'

rm -rf ./output_${ENV}
${SCULPIN} generate --env=${ENV}

LOG=$(git log --oneline -n 1)

rm -rf ${BUILD_DIR}
git clone ${REPO} ${BUILD_DIR}

pushd ${BUILD_DIR}

git checkout -B ${BRANCH}

rsync --quiet --archive --filter="P .git*" --delete ../output_${ENV}/ ./

git add -A .
git commit -m "${LOG}"
git push origin ${BRANCH} --force

popd