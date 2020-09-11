# steps for running it up

## install packages should be separate for client and api. 

### `cd api ` run `npm install`
### `cd client ` run `npm install`

## running api has denpendence with mongodb and redis, requires docker installed in your local machine

### in the root of your project run `npm run up` will up mongodb, redis and api server

## running client react app authentication 

### `cd client` run `npm install`

# if you are lost, here is the youtube link:

https://www.youtube.com/watch?v=Ujk3emNC6L0


# node-auth

## curl

```sh
curl -v  localhost:3000/api/v1/home --cookie 'sid=s%3A_zHhKduFB-uggbg8vEJ4XlZoAlsDkRdT.nE%2FxxAvYDuBg22wJ%2BO7A8evKnrUllgg3Ar7gJq9NhEY'

curl  POST localhost:3000/api/v1/login -H 'Content-Type: application/json' \
  -d '{"email": "sandy@gmail.com", "password": "Secret12"}'

curl -v -X POST localhost:3000/api/v1/register -H 'Content-Type: application/json' \
  -d '{"email": "sandy@gmail.com", "name": "sandy", "password": "Secret12", "passwordConfirmation": "Secret12"}'

curl -v -X POST localhost:3000/api/v1/register -H 'Content-Type: application/json' \
  --cookie 'sid=s%3ACuKP7VRYH1IRgG_jq_RP6daWnPPPYyhd.X0ErxoIqbgqLkW3wmO4QnTvxp55YDFafwKNJ%2Bmt5m0Y'
```

## docker command
```sh
docker exec -it node-au_db_1 mongo  -u admin -p secret auth

docker exec -it node-au_cache_1 redis-cli -a secret
scan 0

// to see the session infomation
get "sess:CuKP7VRYH1IRgG_jq_RP6daWnPPPYyhd"

// to see session expired time

ttl "sess:CuKP7VRYH1IRgG_jq_RP6daWnPPPYyhd"

```

### mongo
```sh
//query
db.users.find({}).pretty()
//delete
db.users.deleteMany({})
```
