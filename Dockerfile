FROM node
 
WORKDIR /usr/src/app/
 
COPY package.json /usr/src/app/
 
RUN yarn --silent
 
COPY . .
 
EXPOSE 3000

CMD [ "yarn", "start" ]