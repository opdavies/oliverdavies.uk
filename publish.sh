#!/bin/bash

ENV=prod
DEPLOY_USER=deployment
DEPLOY_HOST=www.oliverdavies.uk
DEPLOY_PATH=/var/www/oliverdavies/public

# Rebuild stylesheets.
gulp styles --production

./vendor/bin/sculpin generate --env=${ENV} --clean --no-interaction
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

rsync -av --delete output_${ENV}/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi
