# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:14.15-alpine AS deploy
WORKDIR /usr/src/acshb-react-project-template
ENV PATH /usr/src/acshb-react-project-template/node_modules/.bin:$PATH
COPY package*.json ./
COPY acshb-react-common-1.9.0.tgz ./
RUN npm install --only=prod
COPY . .
RUN npm run build --loglevel verbose

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:1.13.9-alpine
COPY --from=deploy /usr/src/acshb-react-project-template/build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
