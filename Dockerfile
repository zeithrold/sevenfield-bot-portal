FROM node:18.13-alpine AS dependencies

WORKDIR /work

COPY package.json .
COPY yarn.lock .

RUN yarn install

FROM node:18.13-alpine

WORKDIR /app

COPY --from=dependencies /work .
COPY . .

RUN yarn build

ENV PORT 3000

ENTRYPOINT ["yarn", "start"]
