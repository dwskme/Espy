const mongoose = require("mongoose");


const watchList = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    type: { type: String },
    users_count: { type: Number }
})

module.exports = mongoose.model('WatchList', watchList);