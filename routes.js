'use strict';
let express = require('express');
let router = express.Router();
// let controller = require('./controllers') //if you want to use 'router.get(/ controller.main)'

router.get('/', function(req, res) {
  res.render('mama') //anything within the public folder
});


module.exports = router;
