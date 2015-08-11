var request = require('request');
var config = require('config');


module.exports = function(name,email,password) {
	
	var request = config.get('ws.baseurl') + config.get('ws.registerUserEndpoint') + "?name=" + name + "&email=" + email + "&password=" + password;
	return request;
 };
