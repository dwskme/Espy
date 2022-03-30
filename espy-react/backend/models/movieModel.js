const mongoose= require("mongoose");	


const movieSchema = new mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    rating_count:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('Movie', movieSchema);