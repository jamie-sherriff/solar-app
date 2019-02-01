// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Can load the landing page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    debugger;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('main div.Landing')
      .assert.containsText('#app header span', 'Solar Progressive Web App')
      // TODO spin up integration test with server?
      // .assert.elementCount('.chartjs-size-monitor', 2)
      .end();
  },

  'Can find the right version': function (browser) {
    const devServer = browser.globals.devServerURL;
    const packageJson = require('../../../package');
    debugger;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('#secret-button')
      .waitForElementVisible('p#version-number-text', 5000)
      .assert.containsText('p#version-number-text', 'Version: ' + packageJson.version)
      .end();
  }


};
