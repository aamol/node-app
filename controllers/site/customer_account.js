var express = require('express');
var async = require('async');
var request = require('request');
var bodyParser = require("body-parser");
var restAPI =  require('../restAPI');
var router = express.Router();
var userRegister = require('../usermodule/userRegister')

//router.use(bodyParser.urlencoded({ extended: false }));

//router.use(express.bodyParser());

router.post('/', function(req, res, next) {
	var user_name=req.body.name;
	var password=req.body.password;
  	var email=req.body.email;
  	console.log("User name = "+user_name+", Email = "+ email +", password is "+password);
  	
  	// res.end("yes");

	var asyncTasks = [];
	asyncTasks.push(function(callback) {
	    var url = userRegister(user_name, email, password);
	    console.log(url);
	    request(url, function(err, response, body) {
	    // JSON body
	    console.log(err);
	    if(err) { console.log(err); callback(true); return; }
	    obj = JSON.parse(body);
	    callback(false,obj);
	    });
    });

	console.log("just before the one hit");
  	async.parallel(asyncTasks, 
	/*
	 * Collate results
	 */
	function(err, results) {
		if(err) { console.log(err); res.send(500,"Server Error"); return; }
	    
		//console.log(results);
		console.log(results[0]);
		console.log(results[0].email);
		console.log(results[0].errorMessage);
		//console.log(results[0].email);
	    if (results[0].errorMessage != undefined) {
			res.render('customer_account',results);	
		}else{
			res.render('register',results);
		};
		
	    //res.render('customer_account',results);
	    //res.render('customer_orders', { title: 'Express' });
	});
});


module.exports = router;