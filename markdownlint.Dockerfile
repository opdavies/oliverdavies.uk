FROM node:14-alpine
ENTRYPOINT ["markdownlint"]
CMD ["/data"]
WORKDIR /root
RUN npm install -g markdownlint-cli
