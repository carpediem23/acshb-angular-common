# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:14.15-alpine AS deploy
WORKDIR /usr/src/acshb-angular-common
ENV PATH /usr/src/acshb-angular-common/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --loglevel verbose

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:1.13.9-alpine
COPY --from=deploy /usr/src/acshb-angular-common/dist/app /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
