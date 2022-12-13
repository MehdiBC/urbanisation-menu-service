FROM node:19-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:19-alpine AS production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY --from=builder /usr/src/app/dist ./dist/

USER node

CMD ["npm", "run", "start:prod"]