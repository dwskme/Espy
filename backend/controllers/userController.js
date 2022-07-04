const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require('crypto');
//Register a User

exports.registerUser = catchAsyncErrors(
    async (req, res, next) => {
        const {
            name,
            email,
            password,
            gender,
            age
        } = req.body;
        const user = await User.create({
            name,
            email,
            password,
            gender,
            age,
            avatar: {
                public_id: "this is a sample id",
                url: "this is a sample url",
            }
        });
        sendToken(user, 201, res);
    }
)


// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    // checking if user has given password and email both
    if (!email || !password) {
        return next(new ErrorHandler("Empty Feilds ", 400),
        );
    }

    const user = await User.findOne({
        email
    }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401),
        );
    }


    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401),
        );
    }
    sendToken(user, 200, res);
});


// LogOut User
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Logged Out Successfully"
    });
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler("No user found with this email", 404));
    }
    // Get Reset Token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });
    // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
    const resetPasswordUrl = `http://localhost:3000/reset-password/${resetToken}`
    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. \n\n ${resetPasswordUrl}\n\n 
    If you have not requested it then ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Espy Password Recovery`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Email Send to ${user.email} Successfully`
        })

    }
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    //creating token hash
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Reset Password Token is invalid or expired.", 400));
    }
    if (req.body.password != req.body.confirmPassowrd) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
});

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success: true,
        user,
    });
});


// Update User Password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id).select("+password");
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
        res.json({
            success: false, message: "Old password is Incorrect"
        })
        return next(new ErrorHandler("Old password is Incorrect", 401));
    }
    else {
        user.password = req.body.newPassword;
        await user.save();
        sendToken(user, 200, res);
    }
});


// Update User Profile
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {

    var newUserData = {}

    if (req.body.name !== "") {
        newUserData.name = req.body.name
    }
    if (req.body.email !== "") {
        newUserData.email = req.body.email
    }
    if (req.body.age !== "") {
        newUserData.age = req.body.age
    }
    if (req.body.gender !== "" || req.body.gender !== undefined) {
        newUserData.gender = req.body.gender
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});


// Delete Profile
exports.deleteProfile = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);
    await user.remove();
    res.status(200).json({
        success: true,
        message: "Account delete Succesfully"
    });
});

// Admin Controllers

// Get all Users (Admin)
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        success: true,
        users,
    });
});

// Get single Users (Admin)
exports.getSingleUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`No user found with id ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// Search single User (Admin)
exports.searchUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.params.query });

    if (!user) {
        return next(new ErrorHandler(`No user found with ${req.params.query}`, 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// Update User (Admin)
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        role: req.body.role,
    };


    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    if (!user) {
        return next(new ErrorHandler(`No user found with id ${req.params.id}`, 404));
    }

    res.status(200).json({
        success: true,
    });
});

// Delete User (Admin)
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.id, role: "user" });
    if (!user) {
        return next(new ErrorHandler(`No user found with id ${req.params.id}`, 404));
    }

    await user.remove();

    res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
    });
});