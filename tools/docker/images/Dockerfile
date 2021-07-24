FROM opdavies/sculpin-serve AS app

FROM app AS build
WORKDIR /app
COPY composer.* ./
RUN composer install --no-dev
COPY app app
COPY source source
RUN sculpin generate --env prod

FROM node:14 AS assets
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run production

FROM nginx:1 AS production
COPY tools/docker/images/nginx/root/ /
WORKDIR /usr/share/nginx/html
COPY --from=build /app/output_prod ./
COPY --from=assets /app/source/build build
