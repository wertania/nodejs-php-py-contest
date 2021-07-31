# nodejs-php-py-contest

## build node.js app

```
cd nodejs
docker build --tag node-docker .
docker run -p 8001:8001 node-docker
```

## build flask python app

```
cd python
docker build --tag flask-docker .
docker run -p 8002:8002 flask-docker
```



## Run all apps

```
docker-compose up --build -d
```

## Stop all apps

```
docker-compose down
```


## Database

name = testdb

## references

https://medium.com/nsoft/building-and-running-nodejs-typescript-postgresql-application-with-docker-3878240a2f73

