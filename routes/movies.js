const { data } = require('../data/data.json');
const express = require('express');
const router = express.Router();

router.get("/", function(req, res, next) {
  res.send( "Hello");
});

/*
router.get("/:id", function(req, res) {
    const id = Number(req.params.id);
    res.json(data[id]);
});
*/


/*
router.get("/randommovie", function(req, res){
  let id = Number(req.params.id);
  let numberOfMovies = data[id].length;
  let movieId = Math.floor(Math.random() * numberOfMovies);
  res.json(data[movieId]);
});
*/

module.exports = router;