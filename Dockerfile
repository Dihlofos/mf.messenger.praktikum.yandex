FROM node:12

COPY . ./

COPY package-lock.json /

RUN ls -al && npm install && npm run build

EXPOSE 4000

CMD node server.js
