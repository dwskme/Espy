const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        maxLength: [30, "Name must be less than 30 characters"],
        minLength: [4, "Name must be at least 4 characters"],
    },
    age: { type: Number, reqired: true },
    gender: { type: String, reqired: true },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password must be at least 8 characters"],
        maxLength: [16, "Password must be less than 16 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        }
    },
    role: {
        type: String,
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    ratedList: { type: [] },
    watchList: { type: [] },
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});


// JWS Token
userSchema.methods.getJWTToken = function () {
    return JWT.sign({
        id: this._id
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Reset Password Token

userSchema.methods.getResetPasswordToken = async function () {
    // Generation Token
    const resetToken = crypto.randomBytes(20).toString("hex");
    // Hashing and Adding to UserSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; //10 minutes
    return resetToken;
}



module.exports = mongoose.model('User', userSchema);