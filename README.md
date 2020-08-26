# gobarber-backend

Check available port
```
lsof -i :5432
```

Start a postgree instace

```
docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

Docker container

```
docker ps || docker ps -a
```

Docker container on/off

```
docker stop id || docker start id
```
Links:

[postgres](https://hub.docker.com/_/postgres)

[Universal Database Tool](https://dbeaver.io/)

[TypeORM](https://typeorm.io/)