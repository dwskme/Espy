const express = require("express");
const app = require("./app");
const connectDB = require("./config/database");	
const dotenv = require("dotenv");



// Config
dotenv.config({path: "backend/config/config.env"});

// Connect to Database
connectDB();



// Defining a port for the server to run.
app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on http://localhost:${process.env.PORT}`)
});