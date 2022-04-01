const ErrorHandler = require('../utils/errorhandler');

module.exports = (err, req, res, next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Something went wrong Internally';


    // Wrong MongoDB ID error
    if(err.name === 'CastError'){	
        const message = `Resource not found with id ${err.path}`;
        err = new ErrorHandler(message, 400);	 
    }

    // Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400);
        res.json({success: false, message:message});
    }

    // Wrong JWT Token error
    if(err.name === "JsonWebTokenError"){
        const message = `JSON web Token is invalid, Try again`;
        err = new ErrorHandler(message, 400);
    }

    //  JWT Expire error
    if(err.name === "TokenExpiredError"){
        const message = `JSON web Token is Expire, Try again`;
        err = new ErrorHandler(message, 400);
    }


    res.json({
        success:false,
        message: err.message,
    });
};