
import  { APP_PORT} from './config'
import app from './app'

app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`))
