# syntax=docker/dockerfile:1
# FROM httpd
# COPY ./index.php /usr/local/apache2/htdocs/
FROM php:8.0-apache
RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pgsql pdo_pgsql
WORKDIR /var/www/html
COPY ./connection.php connection.php
COPY ./db.php db.php
COPY ./index.php index.php
EXPOSE 80