#!/usr/bin/env bash

. scripts/common.sh

${SCRIPTDIR}/../vendor/bin/sculpin generate --clean --no-interaction $@
