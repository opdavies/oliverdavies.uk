#!/usr/bin/env bash

set -e

# Build script for deploying on Netlify.
#
# "composer install" and "yarn install" are run automatically, so there's no
# need to add them here.

# Run the tests to ensure that nothing is broken.
vendor/bin/phpunit

# Generate the site once with no assets to that PurgeCSS has something to look
# at.
vendor/bin/sculpin generate -e prod

# Generate the front-end assets.
yarn build

# Re-generate the again with the assets in the correct location.
vendor/bin/sculpin generate -e prod
