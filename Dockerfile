FROM node:16 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm build

FROM node:16
WORKDIR /app
COPY --from=build /app/dist /app

EXPOSE 3000

CMD [ "npm", "start" ]