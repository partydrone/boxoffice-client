FROM node:10
LABEL maintainer='Andrew Porter <partydrone@me.com>'
RUN yarn global add @angular/cli
ENV APP_DIR /app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
COPY . .
RUN yarn install
EXPOSE 4200 49153
