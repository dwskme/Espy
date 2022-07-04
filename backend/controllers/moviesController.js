const Movies = require('../models/movieModel');
const User = require("../models/userModel");
const WatchList = require('../models/addedToWatchList')
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

// Create Movies -- only for admin

exports.addToWatchList = async (req, res, next) => {

    const movie = req.body.movie;
    const type = req.body.type;

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

    // set user in array of added to watch list
    const watchList = await WatchList.findOne({ id: movie.id }).then(function (result) {
        if (result) {
            var users_count = result.users_count
            users_count = users_count + 1
            console.log(users_count)
            WatchList.findOneAndUpdate({ id: movie.id }, { users_count: users_count }).then(function (docs, err) {
                console.log("Update")
            })
        } else {
            WatchList.create({ id: movie.id, users_count: 1, type: type })
        }
    })


    res.status(201).json({
        success: true,
        message: "Movie add to your watch list"
    })
}


// Get All Movies
exports.getAllMovies = catchAsyncErrors(async (req, res, next) => {

    const movies = await Movies.find().sort({ 'rating_count': -1 });
    const watchList = await WatchList.find().sort({ users_count: -1 });
    res.status(200).json({
        success: true,
        movies,
        watchList
    });
});



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
    const type = req.body.type;
    var movies = req.user.ratedList;
    var watchList = req.user.watchList;

    // checking if movie already exists in the array
    movies.push({ movie: movie, rating: rating })
    const user = await User.findByIdAndUpdate(req.user.id, { ratedList: movies }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    const movieR = Movies.findOne({ id: movie.id }).then(function (result) {
        if (!result) {
            const newMovie = Movies.create({ id: movie.id, rating_count: 1, type: type, averageRating: rating })
        } else {
            var avg = result.averageRating;
            var count = result.rating_count;
            avg_rating = (avg * count)
            avg_rating = avg_rating + parseInt(rating)
            count = count + 1;
            avg_rating = avg_rating / count

            Movies.findOneAndUpdate({ id: result.id }, { rating_count: count, averageRating: avg_rating }).then(function (docs, err) {
                console.log("Updated")
            })
        }
    })

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

exports.removeRating = async (req, res, next) => {
    const movie = req.body.movie;
    var movies = req.user.ratedList;
    var rating;
    // checking if movie already exists in the array
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].movie.id == movie.id) {
            rating = movies[i].rating
            movies.splice(i, 1)
        }
    }
    const user = await User.findByIdAndUpdate(req.user.id, { ratedList: movies }, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    const movieR = Movies.findOne({ id: movie.id }).then(function (result) {
        if (!result) {
            console.log("Not Rated")
        } else {
            var avg = result.averageRating;
            var count = result.rating_count;
            avg_rating = (avg * count)
            avg_rating = avg_rating - parseInt(rating)
            console.log(avg_rating)
            if (avg_rating === 0) {
                Movies.findOneAndDelete({ id: result.id }).then(function (docs, err) {
                    console.log("Updated")
                })
            } else {
                count = count - 1;
                avg_rating = avg_rating / count
                console.log(avg_rating)
                Movies.findOneAndUpdate({ id: result.id }, { rating_count: count, averageRating: avg_rating }).then(function (docs, err) {
                    console.log("Updated")
                })
            }
        }
    })
    res.status(201).json({
        success: true,
        message: "Rating Removed"
    })
}   