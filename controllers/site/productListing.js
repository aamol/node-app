var express = require('express');
var async = require('async');
var request = require('request');
var bodyParser = require("body-parser");
var restAPI =  require('../restAPI');
var router = express.Router();
var productDisplay = require('../productmodule/productListing')
var contentModule = require('../contentmodule')

router.get('/', function(req, res, next) {

	res.render('productListing');

/*	function(err, results) {
		if(err) { console.log(err); res.send(500,"Server Error"); return; }

		console.log("Error code: " + results[0].errorCode);
	    if (results[0].errorCode != undefined) {
			res.render('index',results);	
		}else{
			res.render('productListing',results);
		};
		
	    //res.render('customer_account',results);
	    //res.render('customer_orders', { title: 'Express' });
	});*/
});


module.exports = router;