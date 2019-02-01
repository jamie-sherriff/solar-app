var secretsJson = require('../private/secrets')
module.exports = {
  NODE_ENV: '"production"',
  SOLAR_SERVER_URL: '"https://solar.sherriff.kiwi/solar"',
  GOOGLE_MAPS_KEY: `'${secretsJson.googleMapsKey}'`
};
