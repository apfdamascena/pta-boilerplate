FROM node:latest

USER node
WORKDIR /home/node/

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 3001
CMD yarn start