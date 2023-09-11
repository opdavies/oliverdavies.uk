# https://github.com/casey/just

default:
  just --list

start:
  nix develop --command yarn astro dev --open

create-daily date title:
  #!/usr/bin/env bash
  nvim $(./tools/scripts/create-daily.sh {{ date }} "{{ title }}")

deploy sha:
  rsync -r -avhP --delete dist/* opdavies@104.248.165.137:/srv/oliverdavies.uk

format:
  yarn prettier --write src/**/*.{astro,mdx}
  yarn rustywind src
