#!/bin/bash

set -x

sculpin='/usr/local/bin/sculpin'
deploy_dir='./gh-pages-deployment'
branch='master'

rm -rf ./output_prod
${sculpin} generate --env=prod

rm -rf ${deploy_dir}
git clone git@github.com:opdavies/opdavies.github.io.git ${deploy_dir}

pushd ${deploy_dir}

git checkout -B ${branch}

cp -R ../output_prod/* ./

git add -A .
git commit -m "Deploying sculpin-generated pages to \`${branch}\` branch"
git push origin master --force

popd