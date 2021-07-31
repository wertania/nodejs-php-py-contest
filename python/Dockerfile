# syntax=docker/dockerfile:1
FROM ubuntu:20.04
LABEL maintainer="BE"
RUN apt-get update -y && apt-get install -y python3-pip python-dev libpq-dev
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install -r requirements.txt
COPY . /app
CMD [ "python3", "./app.py" ]
