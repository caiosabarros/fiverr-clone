## Config

- It seems it uses v19.0.0

## Usage

### SERVER

#### Database
To start the server-side, do:

```shell
$ sudo service postgresql start
$ npx prisma migrate dev --name init
$ npx prisma migrate deploy
```

Then, you do:
```shell
$ sudo service postgresql start
$ sudo -u postgres psql
$ psql -U username -h localhost -d "executor" -W
=# create database "executor";
```
Now, to apply the migrations in the prisma/migrations/ folder, we need to do the following: 
```
1. delete all the migrations before the last migration (because it contains all the logic implemented before)
2. We do: ```$ npx prisma migrate reset```
3. We do: ```$npx prisma migrate deploy```
```

To check the database, we can:
```shell
$ npx prisma studio 
```
or 
```shell
$ psql -U username -d executor -h localhost
\# \dt
\# select * from "table_name";
```

## Relevant

To start a web viewer for the database, do:
```shell
$ npx prisma studio
```

