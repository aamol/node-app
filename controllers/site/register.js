var express = require('express');
var async = require('async');
var request = require('request');

var restAPI =  require('../restAPI');
var router = express.Router();
var contentModule = require('../contentmodule')



/*router.get('/register', function(req, res, next) {
  var name = req.param('name');

  var asyncTasks = [];


  asyncTasks.push(function(callback) {
    var url = contentModule(name);
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    obj = JSON.parse(body);
    callback(false,obj);
    });
    
    // body...
  });
asyncTasks.push(function(callback) {
    var url = contentModule('header');
    request(url, function(err, response, body) {
    // JSON body
    if(err) { console.log(err); callback(true); return; }
    obj = JSON.parse(body);
    callback(false,obj);
    });
    
    // body...
  });
  async.parallel(asyncTasks, 
  /*
   * Collate results
   *
  function(err, results) {
    if(err) { console.log(err); res.send(500,"Server Error"); return; }
        res.render('register',results);
  }
  );
}*/
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
}
);

module.exports = router;