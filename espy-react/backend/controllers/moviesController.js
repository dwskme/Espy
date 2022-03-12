const Movies = require('../models/movieModel');



// Create Movies -- only for admin

exports.createMovies = async (req,res,next)=>{

    const movies = await Movies.create(req.body);
    res.status(201).json({
        success:true,
        movies
    })
}

// Get All Movies
exports.getAllMovies= (req,res) => {

    res.status(200).json({message:"Get all movies"});
}


// Update Route -- only for admin

exports.updateMovies = async (req,res,next)=>{

    const movies = await Movies.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({
        success:true,
        movies
    })
}