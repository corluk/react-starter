FROM node:alpine 
WORKDIR  /var/app 
COPY package.json  package.json 
 
COPY dist  dist  
#COPY *.js .
COPY yarn.lock yarn.lock 
RUN yarn install --production --frozen-lockfile
#RUN yarn build dıc
 
EXPOSE 8080 
CMD yarn boot:container

