FROM node:12.0
RUN mkdir -p /data
WORKDIR /data

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN apt-get update && apt-get install -y libnotify-bin
RUN npm update -g npm
RUN npm install -g gulp
RUN npm install -g gulp-clean-css --save-dev
RUN npm install -g gulp-rename --save-dev
RUN npm install
