const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");


//Register a User

exports.registerUser = catchAsyncErrors(
    async(req,res,next)=>{
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password, 
        avatar:{
            public_id: "this is a sample id",
            url: "this is a sample url",
        }
        });
        res.status(201).json({
            success:true,
            user,
        });
    }
)