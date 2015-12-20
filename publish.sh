#!/bin/bash

./vendor/bin/sculpin generate --env=prod
if [ $? -ne 0 ]; then echo "Could not generate the site"; exit 1; fi

rsync -av --delete output_prod/ deployment@www.oliverdavies.uk:/var/www/vhosts/oliverdavies/public
if [ $? -ne 0 ]; then echo "Could not publish the site"; exit 1; fi
