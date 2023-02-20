FROM node:16 AS build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# aqui van las variables de entorno de nuestro archivo .env

ARG NODE_ENV
ARG DATABASE_URL
ARG API_KEY
ARG JWT_SECRET
ARG PASSWORD
ARG USER_GMAIL

ENV NODE_ENV=$NODE_ENV
ENV DATABASE_URL=$DATABASE_URL
ENV API_KEY=$API_KEY
ENV JWT_SECRET=$JWT_SECRET
ENV PASSWORD=$PASSWORD
ENV USER_GMAIL=$USER_GMAIL

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run migrations:run

EXPOSE 8080

CMD ["npm", "start"]
