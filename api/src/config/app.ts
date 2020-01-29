
const {
  NODE_ENV = 'development'
} = process.env

export const IN_PROD = NODE_ENV === 'production'

export const APP_PORT = 3000

