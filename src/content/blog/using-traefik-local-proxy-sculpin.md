---
title: Using Traefik as a local proxy with Sculpin
tags:
    - docker
    - sculpin
draft: true
date: ~
---

<https://github.com/opdavies/oliverdavies.uk/commit/17626df722408f32c2153e485296092675e23024#diff-3fde9d1a396e140fefc7676e1bd237d67b6864552b6f45af1ebcc27bcd0bb6e9>

## Before

```yaml
services:
  app:
    build:
      context: .
      dockerfile: tools/docker/images/Dockerfile
      target: app
    volumes:
      - assets:/app/source/build
      - /app/output_dev
      - .:/app
    ports:
      - 8000:8000
```

## Adding the proxy service

```yaml
services:
  proxy:
    image: traefik:v2.0-alpine
    command:
      - --api.insecure=true
      - --providers.docker
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    ports:
      - 80:80
      - 8080:8080
    labels:
      - "traefik.enable=false"
```

## Updating the app service

```yaml
app:
  build:
    context: .
    dockerfile: tools/docker/images/Dockerfile
    target: app
  expose:
    - 80
  command: [generate, --server, --watch, --port, '80', --url, http://oliverdavies.localhost]
  volumes:
    - assets:/app/source/build
    - /app/output_dev
    - .:/app
  labels:
    - "traefik.http.routers.oliverdavies.rule=Host(`oliverdavies.localhost`)"
```
