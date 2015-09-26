var request = require('request');
var config = require('config');


module.exports = function(productId) {
	
	var request = config.get('ws.baseurl') + config.get('ws.productImageEndpoint') + "?productId=" + productId;
	return request;
 };
