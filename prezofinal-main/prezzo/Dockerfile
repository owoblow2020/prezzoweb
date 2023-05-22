FROM node:latest

# ENV NODE_ENV development

ENV CONTAINER_HOME=/home/app/prezzo/frontend 

#set the work dir
RUN mkdir -p $CONTAINER_HOME  

#define work dir
WORKDIR $CONTAINER_HOME

COPY package.json $CONTAINER_HOME
COPY . $CONTAINER_HOME

RUN npm install
RUN npm run build

EXPOSE 3000

CMD node build/index.js 






