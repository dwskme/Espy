const Movies = require('../models/movieModel');
const User = require("../models/userModel");



// Create Movies -- only for admin

exports.addToWatchList = async (req, res, next) => {

    const movie = req.body.movie;
    var movies = req.user.watchList
    // checking if movie already exists in the array
    function checkMovie(movieId) {
        for (var i = 0; i < movies.length; i++) {
            if (movies[i].id === movieId) {
                return true;
            }
        }
        return false;
    }

    if (checkMovie(movie.id) === false) {
        movies.push(movie)
    } else {
        res.status(201).json({
            success: false,
            message: "You have already added this movie"
        });
        return;
    }

    const user = await User.findByIdAndUpdate(req.user.id, { watchList: movies }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(201).json({
        success: true,
        message: "Movie add to your watch list"
    })
}

// Get All Movies
exports.getAllMovies = (req, res) => {

    res.status(200).json({ message: "Get all movies" });
}


// Update Route -- only for admin

exports.updateMovies = async (req, res, next) => {

    const movies = await Movies.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
        success: true,
        movies
    })
}

exports.removeFromList = async (req, res, next) => {

    const movieId = req.params.movieId;
    const movies = req.user.watchList;
    console.log(movies.length)
    for (var i = 0; i < movies.length; i++) {
        console.log(movies[i].id)
        if (movies[i].id === parseInt(movieId)) {
            console.log(true)
            movies.splice(i, 1)
        }
    }
    const user = await User.findByIdAndUpdate(req.user.id, { watchList: movies }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        movies
    })
}

exports.rateMovie = async (req, res, next) => {

    const movie = req.body.movie;
    const rating = req.body.rating;
    var movies = req.user.ratedList;
    var watchList = req.user.watchList;
    // checking if movie already exists in the array
    movies.push({ movie: movie, rating: rating })
    const user = await User.findByIdAndUpdate(req.user.id, { ratedList: movies }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    // remove from watch later list
    for (var i = 0; i < watchList.length; i++) {
        if (watchList[i].id === parseInt(movie.id)) {
            watchList.splice(i, 1)
        }
    }
    const user_ = await User.findByIdAndUpdate(req.user.id, { watchList: watchList }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(201).json({
        success: true,
        message: "Movie rated"
    })
}