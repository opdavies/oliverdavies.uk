#!/bin/sh

set -e

cp -r /build /app/source

exec "$@"
