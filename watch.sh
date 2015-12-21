#!/bin/bash

if [ ! -d vendor/ ];
  then
    composer install
fi

./vendor/bin/sculpin generate --server --watch --clean --no-interaction
