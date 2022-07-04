const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");	

exports.isAuthenticatedUser = catchAsyncError(async(req,res, next)=>{

    const {token} = req.cookies;
    // console.log(req.cookies.token)
    if(!token){
        return next( new ErrorHandler("Please Login First", 401));	
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    
    req.user = await User.findById(decodedData.id);
    // console.log(decodedData)
    next();

});


exports.authorizeRoles = (...roles)=>{
    return(req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next(
            new ErrorHandler(`Role: "${req.user.role}" do not have permission to run this request`, 403)
            );
        }
        next();
    }
}