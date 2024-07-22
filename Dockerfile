FROM nginx:1.27.0-alpine-slim

WORKDIR /app

RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/default.conf
ADD default.conf /etc/nginx/conf.d/default.conf
ADD /dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]