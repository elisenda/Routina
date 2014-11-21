exports.config = {
 sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

   capabilities: {
   	// You can use other browsers
      // like firefox, phantoms, chrome, safari, IE (-_-)
     	'browserName': 'chrome',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'ngValidation Protractor Tests'
	},
   specs: [
   	// We are going to make this file in a minute
      'e2e/mainMenuTest.js'
	],
   jasmineNodeOpts: {
   	showColors: true,
   	defaultTimeoutInterval: 30000,
   	isVerbose: true,
  	},
	allScriptsTimeout: 20000,
   onPrepare: function(){
   	browser.driver.get('http://localhost' +  (process.env.HTTP_PORT || '8000') );
	}

};
