// features/support/world.js

var zombie = require('zombie');
function WorldFactory(callback) {

  var browser = new zombie();

  var world = {
    browser: browser,                        // this.browser will be available in step definitions
    visit: function (url, callback) {         // this.visit will be available in step definitions
      this.browser.visit(url, callback);
    }
  };

  callback(world); // tell Cucumber we're finished and to use our world object instead of 'this'
};
exports.World = WorldFactory;