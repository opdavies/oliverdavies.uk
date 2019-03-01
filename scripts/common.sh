#!/usr/bin/env bash

realpath() {
    [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}

SCRIPTPATH=$(realpath "$0")
SCRIPTDIR=$(dirname $SCRIPTPATH)

SCULPIN="$SCRIPTDIR/../vendor/bin/sculpin"
