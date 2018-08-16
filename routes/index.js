// import data from "../data/data.json";

const data = require('../data/data.json');
const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

router.get("/randommovies", function(req, res){
  res.json(data);
})

router.get("/randommovies/:id", function(req, res) {
    let id = Number(req.params.id);
    res.json(data[id]);
})




module.exports = router;