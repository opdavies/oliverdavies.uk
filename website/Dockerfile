FROM node:14-alpine AS assets

ARG NODE_ENV="production"
ARG SCULPIN_ENV="prod"
ENV NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/node_modules/.bin" \
    SCULPIN_ENV="${SCULPIN_ENV}" \
    USER="node"

RUN apk add --no-cache bash

WORKDIR /app/assets

RUN mkdir -p /node_modules \
  && chown node:node -R /app /node_modules

USER node

COPY --chown=node:node assets/*yarn* assets/package.json ./

RUN yarn install && yarn cache clean

COPY --chown=node:node . ..

RUN if [ "${NODE_ENV}" != "development" ]; then \
  ../run yarn:build:css && ../run yarn:build:js; \
  else mkdir -p /app/build; fi

CMD ["bash"]

###

FROM opdavies/sculpin-serve AS app

WORKDIR /app

RUN mkdir /output \
  && chown sculpin:sculpin -R /output

###

FROM app AS build

ENV PATH=$PATH:/app/vendor/bin/phpunit

COPY tools/docker/images/app/root /

WORKDIR /app

USER sculpin

COPY --chown=sculpin:sculpin composer.* ./

RUN composer install --no-dev

COPY --chown=sculpin:sculpin app app
COPY --chown=sculpin:sculpin source source
COPY --chown=sculpin:sculpin src src

RUN sculpin generate --env prod --output-dir /output/html

COPY --chown=sculpin:sculpin . .
COPY --chown=sculpin:sculpin --from=assets /app/source/build /build

ENTRYPOINT ["/usr/bin/docker-entrypoint.sh"]

CMD ["bash"]

###

FROM alpine AS production

COPY --from=build /output/html /app

CMD ["sh"]
