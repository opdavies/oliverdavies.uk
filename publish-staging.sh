#!/bin/bash

ENV=staging
DEPLOY_USER=deployment
DEPLOY_HOST=oliverdavies.s.oliverdavies.uk
DEPLOY_PATH=/var/www/oliverdavies/public

./vendor/bin/sculpin generate --env=${ENV} --clean --no-interaction
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

rsync -av --delete output_${ENV}/ ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi
