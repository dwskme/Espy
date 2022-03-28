const express = require('express');
const { addToWatchList, removeFromList, rateMovie } = require('../controllers/moviesController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');



router.route("/add-to-watch-list").put(isAuthenticatedUser, addToWatchList);
router.route("/remove-from-watch-list/:movieId").put(isAuthenticatedUser, removeFromList);
router.route("/rate").put(isAuthenticatedUser, rateMovie);


// router.route("/movies/new").post(createMovies);
// router.route("/movies/:id").put(createMovies);
module.exports = router;