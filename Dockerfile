FROM node:16.16-alpine3.16

RUN apk update

RUN apk add neovim

RUN apk add --no-cache zsh

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
