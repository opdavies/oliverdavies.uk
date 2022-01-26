FROM node:14-alpine AS markdownlint

RUN npm install -g markdownlint-cli

USER node

ENTRYPOINT ["markdownlint"]

CMD ["/data"]

###

FROM node:14-alpine AS assets

ARG NODE_ENV="production"
ARG SCULPIN_ENV="prod"
ENV NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/node_modules/.bin" \
    SCULPIN_ENV="${SCULPIN_ENV}"

RUN apk add --no-cache bash

WORKDIR /app

RUN mkdir -p /node_modules \
  && chown node:node -R /app /node_modules

USER node

COPY --chown=node:node *yarn* package.json ./

RUN yarn install && yarn cache clean

COPY --chown=node:node . .

RUN if [ "${NODE_ENV}" != "development" ]; then \
  ./run yarn:build:css && ./run yarn:build:js; \
  else mkdir -p /app/build; fi

CMD ["bash"]

###

FROM opdavies/sculpin-serve AS app

WORKDIR /app

RUN adduser --disabled-password sculpin \
  && mkdir /output \
  && chown sculpin:sculpin -R /app /output

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
COPY --chown=sculpin:sculpin --from=assets /app/build /build

ENTRYPOINT ["/usr/bin/docker-entrypoint.sh"]

CMD ["bash"]
