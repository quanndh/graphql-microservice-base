FROM node:16.15.1
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 3000
#RUN chown -R node /usr/src/app
#USER node
CMD ["npm", "start"]
