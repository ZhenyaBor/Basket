FROM node
 
WORKDIR /usr/src/app/
 
COPY package.json /usr/src/app/
 
RUN npm install --silent
 
COPY . .
 
EXPOSE 3000

CMD [ "npm", "start" ]