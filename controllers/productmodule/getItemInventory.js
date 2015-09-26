var request = require('request');
var config = require('config');


module.exports = function(skuId) {
	
	var request = config.get('ws.baseurl') + config.get('ws.itemInventoryEndpoint') + "?skuId=" + skuId;
	return request;
 };
