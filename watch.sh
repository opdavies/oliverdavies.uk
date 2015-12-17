#!/bin/bash

if [ ! -d vendor/ ];
  then
    composer install
fi

rm -rf output_dev/
./vendor/bin/sculpin generate --server --watch
