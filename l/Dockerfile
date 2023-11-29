FROM node:lts-alpine
COPY . .

RUN npm install

EXPOSE $PORT
CMD ["node", "index.js"]