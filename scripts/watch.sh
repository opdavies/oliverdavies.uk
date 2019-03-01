#!/usr/bin/env bash

. scripts/common.sh

$SCULPIN generate --server --watch --clean --no-interaction $@
