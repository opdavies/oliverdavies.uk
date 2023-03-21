# https://github.com/casey/just

default:
  just --list

create-daily:
  #!/usr/bin/env bash
  date="$(date +%Y-%m-%d)"
  filepath="source/_daily_emails"
  filename="${date}.md"

  touch "${filepath}/${filename}"
  eval "${EDITOR}" "${filepath}/${filename}"

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
