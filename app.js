import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import routes from './routes'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import webpackDevServer from './webpack/development'

dotenv.config({
  silent: true
})
const app = express()

// View templates
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app)
}

// Static
app.use(express.static(path.join(__dirname, './public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', routes)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
  next()
})

export default app
