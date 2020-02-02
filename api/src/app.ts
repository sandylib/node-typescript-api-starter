import express from 'express'
import session, {Store} from 'express-session'
import { SESSION_OPTIONS } from './config'
import {register, login, home} from './routes'
import { serverError, notFound } from './middleware'

export const createApp = (store: Store) => {
const app = express()

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

return app;
}