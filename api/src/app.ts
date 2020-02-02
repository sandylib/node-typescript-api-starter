import express from 'express'
import mongoose from 'mongoose'
import session, {Store} from 'express-session'
import { SESSION_OPTIONS } from './config'
import {register, login, home} from './routes'
import { serverError, notFound } from './middleware'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import  {REDIS_OPTIONS, MONGO_URI, MONGO_OPTIONS} from './config'

const app = express()

mongoose.connect(MONGO_URI, MONGO_OPTIONS)
.then(() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ })
.catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err); // process.exit();
});

const RedisStore = connectRedis(session)

const client = new Redis(REDIS_OPTIONS)

const store = new RedisStore({client})

app.use(
  session({
    ...SESSION_OPTIONS, 
    store
  })
)

app.use(express.json())

app.use(home)

app.use(register)

app.use(login)

app.use(notFound)

app.use(serverError)

export default app;
