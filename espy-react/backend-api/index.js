const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        // Latest moongose support so no neew to write these below
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.error(err);
    });

app.use(express.json());    //TO support json format in express
app.use("/api/auth", authRoute); //Specifying routing address 
app.listen(8800, () => {
    console.log("Backend server is running!");
});