FROM nginx:1.22.0-alpine
COPY . /usr/share/nginx/html

COPY ./nginx-templates/* /etc/nginx/templates/
EXPOSE $PORT