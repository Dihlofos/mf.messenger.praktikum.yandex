FROM node:12

COPY package*.json ./

RUN npm install

COPY . ./

RUN ls -al && npm run build

EXPOSE 4000

CMD node server.js
