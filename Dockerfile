FROM nginx:alpine
LABEL maintaner="Kemal Abdic <kemal.abdic2[at]gmail.com>"
LABEL version="1.0.0"
COPY . /usr/share/nginx/html/