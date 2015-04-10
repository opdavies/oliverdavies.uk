#!/bin/bash

SERVER_NAME="root@212.111.40.238"
DOCROOT="/var/www/html/oliverdavies.co.uk/htdocs"

sculpin generate --env=prod
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

rsync -avze 'ssh' --delete output_prod/ ${SERVER_NAME}:${DOCROOT}
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi
