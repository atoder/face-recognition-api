## Face Detection Game - API REPO

## Description:
A website where you can create a user account and get ranked based on face pictures you upload. 
Utilizes AI library to detect face in the pictures uploaded.


### Technologies
1. React.js
2. Express.js
3. PostgreSQL


### Installation Notes:

#### PostGres

1. Create a database `smart-brain`
2. Make sure to have following tables
  1. `login`
  2. `user`


## PostgreSQL statements to run
### `users` table
```sql
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries bigint DEFAULT 0,
    joined timestamp NOT NULL
);
```



### `login` table

```sql
CREATE TABLE login (
    id serial PRIMARY KEY,
    hash varchar(100) NOT NULL,
    email text UNIQUE NOT NULL
);
```

~~


## Clarifi API and .env file

<https://portal.clarifai.com/signup>

Create .env file in face-api/.env
(keep it hidden from repo using .gitignore)

You'll need to put a serial key into that file
```
CLARIFAI_API_KEY="yourSerialNumber"
```
