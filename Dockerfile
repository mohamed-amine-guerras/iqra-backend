FROM node:carbon-alpine
RUN apk --no-cache add --virtual builds-deps build-base python
WORKDIR /usr/src/app
COPY ./ ./
RUN npm i npm@latest -g
#ARG REDIS_I
#ENV REDIS_URL=$REDIS_IP
#RUN echo ${REDIS_IP}-${REDIS_URL}
#ENV FRONTEND_URL || 'https://b2b.yassir.io'
RUN npm install
#RUN npm run-script build
#RUN rm -rf node_modules
#ENV TARGET_ENV prod
ENV NODE_ENV production
ENV MONGO_URL 'mongodb://mongo-prod:27017/yassirDB'
#RUN npm i --production
ENV PORT 8080
EXPOSE 8080
CMD node app.js
