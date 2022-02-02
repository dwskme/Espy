const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        profilePic: {
            type: String,
            default: ""
        },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// The exported model will be the collection name in MONGODB
module.exports = mongoose.model("users", UserSchema);