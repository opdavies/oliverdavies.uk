FROM opdavies/sculpin-serve AS app
WORKDIR /app
COPY composer.* ./
RUN composer install
COPY app app
COPY source source
RUN sculpin generate -e prod

FROM node:14 AS assets
WORKDIR /node
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run production

FROM nginx AS nginx
COPY tools/docker/images/nginx/root /
WORKDIR /app
COPY --from=app /app/output_prod ./
COPY --from=assets /node/source/build build
