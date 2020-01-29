mongo -- "$MONGO_INITDB_DATABASE" <<EOF
  db.createUser({
    user: "$MONGO_USERNAME",
    pwd: "$MONGO_PASWORD",
    roles: [
      { role: 'readWrite', db: "$MONGO_INITDB_DATABASE"}
    ]
  })

EOF