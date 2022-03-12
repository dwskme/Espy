const mongoose = require('mongoose');	
const validator = require('validator');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        maxLength:[30, "Name must be less than 30 characters"],
        minLength:[4, "Name must be at least 4 characters"],
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"]
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
        minLength:[8, "Password must be at least 8 characters"],
        maxLength:[16, "Password must be less than 16 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        }
    },
    role:{
        type:String,
        default:"user",	
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

});

module.exports = mongoose.model('User', userSchema); 