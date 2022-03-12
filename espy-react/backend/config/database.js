const mongoose = require("mongoose");

const connectDB = () => {

    mongoose
        .connect(process.env.MONGO_URL, {
            // Latest mongoose support so no new to write these below
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        })
        .then((data) => console.log(`DB Connection Successful: ${data.connection.host}`));
}

module.exports = connectDB;