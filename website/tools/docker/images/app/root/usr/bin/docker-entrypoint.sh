#!/bin/sh

set -e

cp -r /app/build /app/source

exec "$@"
