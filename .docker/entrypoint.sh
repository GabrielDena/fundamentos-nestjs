#! /bin/bash

yarn install
yarn build
npx typeorm migration:run
yarn start:dev
