const os = require('os')

function getLocalIP() {
  const interfaces = os.networkInterfaces()
  
  for (const name of Object.keys(interfaces)) {
    for (const item of interfaces[name]) {
      if (item.family === 'IPv4' && !item.internal) {
        return item.address
      }
    }
  }
  
  return '127.0.0.1'
}

console.log(getLocalIP())