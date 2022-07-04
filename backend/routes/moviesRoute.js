const express = require('express');
const { addToWatchList, removeFromList, rateMovie, getAllMovies, removeRating } = require('../controllers/moviesController');
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');



router.route("/add-to-watch-list").put(isAuthenticatedUser, addToWatchList);
router.route("/remove-from-watch-list/:movieId").put(isAuthenticatedUser, removeFromList);
router.route("/rate").put(isAuthenticatedUser, rateMovie);
router.route("/remove-rating").put(isAuthenticatedUser, removeRating);
router.route("/get-stats").get(isAuthenticatedUser, authorizeRoles("admin"), getAllMovies);


// router.route("/movies/new").post(createMovies);
// router.route("/movies/:id").put(createMovies);
module.exports = router;