var express = require('express');
var orm = require('../config/orm');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('signup', {
    urlPath: req.baseUrl
  });
});

module.exports = router;
