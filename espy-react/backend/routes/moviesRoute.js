const express = require('express');	
const { getAllMovies } = require('../controllers/moviesController');
const router = express.Router();




router.route("/movies").get(getAllMovies);
router.route("/movies/new").post(createMovies);
router.route("/movies/:id").put(createMovies);
module.exports = router;