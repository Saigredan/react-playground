import express from 'express'
import http from 'http'
// Express app setup
const app = express()
const server = http.createServer(app)

app.get('*', (req, res) => {
  res.end('Hello Express')
})

server.listen(3000)
server.on('listening', () => {
  console.log('Server is listening on port: 3000')
})
