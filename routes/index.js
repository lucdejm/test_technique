const { data } = require('../data/data.json');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});


module.exports = router;