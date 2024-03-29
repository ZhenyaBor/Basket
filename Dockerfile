FROM node
 
WORKDIR /app
 
COPY package.json .

COPY yarn.lock .
 
RUN yarn 

CMD [ "yarn", "start" ]