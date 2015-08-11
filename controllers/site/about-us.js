var express = require('express');
var async = require('async');
var request = require('request');

var restAPI =  require('../restAPI');
var router = express.Router();
var contentModule = require('../contentmodule')


router.get('/', function(req, res, next) {
  res.render('about-us', { title: 'Express' });
}
);

module.exports = router;