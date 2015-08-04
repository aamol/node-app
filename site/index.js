var express = require('express');

var restAPI =  require('../restAPI');
var router = express.Router();




router.get('/', function(req, res, next) {
  var name = req.param('name');
  res.json(restAPI(name));
});

module.exports = router;