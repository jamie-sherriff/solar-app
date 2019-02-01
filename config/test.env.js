var merge = require('webpack-merge')
var devEnv = require('./dev.env')
var os = require('os')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SOLAR_SERVER_URL: `"http://${os.hostname()}:3000/"`
})
