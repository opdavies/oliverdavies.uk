FROM node:18-bullseye-slim AS base

ARG NODE_ENV="production"
ARG SCULPIN_ENV="prod"
ENV NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/node_modules/.bin" \
    USER="node"

WORKDIR /app

RUN mkdir -p /node_modules \
  && chown node:node -R /app /node_modules

###

FROM base AS build

USER node

COPY --chown=node:node *yarn* package.json ./

RUN yarn install && yarn cache clean

COPY --chown=node:node . .

RUN if [ "${NODE_ENV}" != "development" ]; then \
  yarn build; \
  else mkdir -p /app/build; fi

CMD ["bash"]

###

FROM alpine AS production

COPY --from=build /app/dist /app

CMD ["bash"]
