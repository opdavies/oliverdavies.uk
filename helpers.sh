#!/usr/bin/env bash

OPERATION=$1
shift
ARGS=$*

case ${OPERATION} in
  "sculpin-watch") vendor/bin/sculpin generate --clean --no-interaction --server --watch $ARGS;;
  "yarn-watch") yarn run watch $ARGS;;
esac
