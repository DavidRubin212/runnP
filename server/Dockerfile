FROM node:18-alpine 

WORKDIR /server

COPY package*.json ./

COPY . .

RUN npm install 

EXPOSE 4003

RUN npm run build

CMD ["npm", "run", "start:dev"]