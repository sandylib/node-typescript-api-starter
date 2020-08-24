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