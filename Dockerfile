FROM node:22-alpine AS builder

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/passeio-app/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'
