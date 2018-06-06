export function log (message) {
  process.stdout.write(`${message}\n`)
}

export function normalizePort (val) {
  const port = parseInt(val, 10)
  if (Number.isNaN(port)) {
    // named pipe
    return val
  }
  if (port >= 0) {
    // port number
    return port
  }
  return false
}
