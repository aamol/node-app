var express = require('express');
var async = require('async');
var request = require('request');
var bodyParser = require("body-parser");
var restAPI =  require('../restAPI');
var router = express.Router();

var contentModule = require('../contentmodule');
var getProductDetails = require('../productmodule/getProductDetails');
var getItemInventory = require('../productmodule/getItemInventory');
var getItemsForProduct = require('../productmodule/getItemsForProduct');
var getProductPrice = require('../productmodule/getProductPrice');
var getProductImages = require('../productmodule/getProductImages');

//router.use(bodyParser.urlencoded({ extended: false }));

//router.use(express.bodyParser());

router.get('/', function(req, res, next) {
	var productId = req.query.productId;
	console.log("ProductId: " + productId);
	var asyncTasks = [];
	asyncTasks.push(function(callback) {
	    var url = getProductDetails(productId);
	    console.log("getProductDetails URL: " + url);
	    request(url, function(err, response, body) {
	    // JSON body
	    if(err) { console.log(err); callback(true); return; }
	    console.log("Body: " + body);
	    obj = JSON.parse(body);
	    callback(false,obj);
	    });
    });

	asyncTasks.push(function(callback) {
    var url = contentModule('header');
    console.log("content header URL: " + url);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    obj = JSON.parse(body);
    callback(false,obj);
    });
    
  });

  asyncTasks.push(function(callback) {
    var url = contentModule('topnav');
    console.log("topnav content URL: " + url);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    obj = JSON.parse(body);
    callback(false,obj);
    });
  });

	asyncTasks.push(function(callback) {
    var url = getItemsForProduct(productId);
    console.log("getItemsForProduct URL: " + url);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    console.log("Items for Product: Body: " + body);
    obj = JSON.parse(body);
    callback(false,obj);
    });
  });

	asyncTasks.push(function(callback) {
    var url = getProductPrice(productId);
    console.log("getProductPrice URL: " + url);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    console.log("Product price: Body: " + body);
    obj = JSON.parse(body);
    callback(false,obj);
    });
  });

	/*asyncTasks.push(function(callback) {
    var url = getProductImages(productId);
    console.log("getProductImages URL: " + url);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    obj = JSON.parse(body);
    callback(false,obj);
    });
  });*/

	console.log("just before the consolidated hit");
  	async.parallel(asyncTasks, 
	/*
	 * Collate results
	 */
	function(err, results) {
		if(err) { console.log(err); res.status(500).send("Server Error"); return; }
		//if(err) { console.log(err); res.send(500,"Server Error"); return; }

		console.log("Error code: " + results[0].errorCode);
	    if (results[0].errorCode != undefined) {
			res.render('index',results);	
		}else{
			res.render('productDisplay',results);
		};
		
	    //res.render('customer_account',results);
	    //res.render('customer_orders', { title: 'Express' });
	});
});


module.exports = router;