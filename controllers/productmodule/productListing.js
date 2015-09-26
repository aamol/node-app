var request = require('request');
var config = require('config');


module.exports = function(categoryId) {
	
	var request = config.get('ws.baseurl') + config.get('ws.productListingEndpoint') + "?categoryId=" + categoryId;
	return request;
 };

