FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

ENV SKIP_ENV_VALIDATION=true
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3002
