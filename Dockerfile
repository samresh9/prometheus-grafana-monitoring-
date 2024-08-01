FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install && npm install -g typescript nodemon

# Bundle app source
COPY . .
RUN npm run build

EXPOSE 3000
# CMD [ "npm", "run", "start" ]
# CMD ["nodemon", "--watch", "src", "--exec", "npm", "run", "start"]
CMD ["node", "./dist/index.js"]