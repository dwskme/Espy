const mongoose= require("mongoose");	


const movieSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter Movie Name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Movie Description"]
    }

})