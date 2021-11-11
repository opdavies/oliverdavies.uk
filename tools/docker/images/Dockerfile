FROM opdavies/sculpin-serve AS app

FROM app AS build
ENV PATH=$PATH:/app/vendor/bin/phpunit
WORKDIR /app
COPY composer.* ./
RUN composer install --no-dev
COPY app app
COPY source source
COPY src src
RUN sculpin generate --env prod

FROM node:14 AS assets
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run production

FROM nginx:1 AS production
COPY tools/docker/images/nginx/root/ /
RUN mkdir -p /code && \
  chown -R nginx:nginx /code && \
  chmod -R 755 /code && \
  chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid
USER nginx
WORKDIR /code
COPY --chown=nginx --from=build /app/output_prod ./
COPY --chown=nginx --from=assets /app/source/build build
EXPOSE 8080
