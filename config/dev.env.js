var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var os = require('os')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SOLAR_SERVER_URL: `"http://${os.hostname()}:3000/"`
});
