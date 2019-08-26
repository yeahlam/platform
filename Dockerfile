FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y nginx
COPY ./pubilc /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
