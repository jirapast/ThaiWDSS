FROM node:16-alpine
WORKDIR /app
COPY package.json . 
COPY package-lock.json . 
COPY /src /app/src
COPY /public .
RUN npm install
CMD [ "npm", "start" ]