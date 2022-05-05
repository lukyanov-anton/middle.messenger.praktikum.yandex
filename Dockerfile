FROM node:16 as build

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

#FROM node:16
#WORKDIR /app
#COPY --from=build /app/node_modules /app/node_modules
#COPY --from=build /app/dist /app/dist
#COPY --from=build /app/server.js /app/server.js

EXPOSE 3000

CMD [ "node", "server.js" ]