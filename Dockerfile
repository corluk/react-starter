FROM node 
WORKDIR  /var/app 
COPY package.json  package.json 
 
COPY src src  
COPY *.js .
COPY yarn.lock yarn.lock 
RUN yarn  install 
RUN yarn build 
 
EXPOSE 8080 
CMD node lib/server/start.js 

