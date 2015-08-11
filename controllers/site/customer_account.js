var express = require('express');
var async = require('async');
var request = require('request');
var bodyParser = require("body-parser");
var restAPI =  require('../restAPI');
var router = express.Router();
var userModule = require('../usermodule')

//router.use(bodyParser.urlencoded({ extended: false }));

//router.use(express.bodyParser());

router.post('/', function(req, res, next) {
	var password=req.body.password;
  	var email=req.body.email;
  	console.log("Email = "+ email +", password is "+password);
  	// res.end("yes");

	var asyncTasks = [];
	asyncTasks.push(function(callback) {
	    var url = userModule(email, password);
	    console.log(url);
	    request(url, function(err, response, body) {
	    // JSON body
	    console.log(err);
	    if(err) { console.log(err); callback(true); return; }
	    obj = JSON.parse(body);
	    callback(false,obj);
	    });
    });

	console.log("just before parallel hit");
  	async.parallel(asyncTasks, 
	/*
	 * Collate results
	 */
	function(err, results) {
		if(err) { console.log(err); res.send(500,"Server Error"); return; }
	    res.render('customer_orders',results);
	    //res.render('customer_orders', { title: 'Express' });
	});
});


module.exports = router;