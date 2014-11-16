var path = require('canonical-path');
var projectRoot = path.resolve(__dirname, '..');

exports.config = {

  capabilities: {
    'browserName': 'chrome',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
  },

  specs: [
    path.resolve(projectRoot, 'test/e2e/test.*.js'),
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 120000,
    isVerbose: true
  },

  onPrepare: function() {
    // Set the browser size with this
    // browser.driver.manage().window().setSize(1200, 800);

    // Disable Animations with this
    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(function($animate) {
        $animate.enabled(false);
      });
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);

    // Navigate once on homepage
    browser.driver.get('http://localhost:4444/wd/hub');
  },

  seleniumServerJar: path.resolve(projectRoot, 'node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar'),
  seleniumPort: 4444
};
