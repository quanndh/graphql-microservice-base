FROM node:12.14-alpine

LABEL maintainer="quanndh1810@gmail.com"

EXPOSE 3000

WORKDIR /home/node

COPY . /home/node

RUN yarn install --pure-lockfile

RUN yarn build

CMD ["node", "dist/main.js"]
