# https://github.com/casey/just

default:
  just --list

start:
  nix develop --command yarn astro dev --open

create-daily date title:
  #!/usr/bin/env bash
  ./tools/scripts/create-daily.sh {{ date }} {{ title }}

deploy sha:
  rm -fr _deploy
  docker container rm oliverdavies.uk-build || true

  docker image pull ghcr.io/opdavies/oliverdavies.uk-build:{{ sha }}
  docker container run --entrypoint sh --name oliverdavies.uk-build ghcr.io/opdavies/oliverdavies.uk-build
  docker container cp oliverdavies.uk-build:/app/ _deploy

  tree _deploy

  tree -L 2 _deploy

  rsync -r -avhP --delete _deploy/* opdavies@104.248.165.137:/srv/oliverdavies.uk

build-images sha:
  docker image build . \
    --target production \
    -t ghcr.io/opdavies/oliverdavies.uk-build:latest

  docker image build . \
    --target production \
    -t ghcr.io/opdavies/oliverdavies.uk-build:{{ sha }}

push-images sha: (build-images sha)
  docker image push ghcr.io/opdavies/oliverdavies.uk-build:latest
  docker image push ghcr.io/opdavies/oliverdavies.uk-build:{{ sha }}

format:
  yarn prettier --write src/**/*.{astro,mdx}
  yarn rustywind src
