var request = require('request');
var config = require('config');


module.exports = function(email,password) {
	
	var request = config.get('ws.baseurl') + config.get('ws.registerUserEndpoint') + "?email=" + email + "&password=" + password;
	return request;
 };
