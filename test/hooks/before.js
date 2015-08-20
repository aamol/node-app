var WebdriverIO = require('webdriverio'),
    merge = require('deepmerge'),
    config = require('../support/configure');

var BeforeHook = module.exports = function(done) {

    var options = config.options;
    options = merge(config.options, config.selenium || {});
    options.desiredCapabilities = config.capabilities;
    this.browser = WebdriverIO.remote(options);
  	this.browser.init().windowHandleMaximize().timeoutsImplicitWait(1000).call(done);
}
