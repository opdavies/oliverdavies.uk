#!/usr/bin/env bash

. scripts/common.sh

${SCRIPTDIR}/../vendor/bin/sculpin generate --server --watch --clean --no-interaction $@
