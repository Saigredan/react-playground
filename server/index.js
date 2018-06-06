import http from 'http'
import app from '../app'
import { log, normalizePort } from './utils'

const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

const server = http.createServer(app)
let availablePort = port

function startServer (serverPort) {
  server.listen(serverPort)
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = `${
    typeof port === 'string' ? 'Pipe' : 'Port'
  } ${port}`
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log(`${bind} requires elevated privileges`)
      process.exit(1)
    case 'EADDRINUSE':
      if (availablePort - port < 10) {
        availablePort += 1
        startServer(availablePort)
      } else {
        log(`${bind} is already in use. Changing`)
        process.exit(1)
      }
      break
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  const bind = `${
    typeof addr === 'string' ? 'pipe' : 'port'
  } ${
    typeof addr === 'string' ? addr : addr.port
  }`
  log(`Server is listening on ${bind}`)
  log(`Visit: http://localhost:${addr.port}`)
}

server.on('error', onError)
server.on('listening', onListening)
startServer(availablePort)
