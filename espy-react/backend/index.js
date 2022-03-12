const app = require("./app");
const connectDB = require("./config/database");	
const dotenv = require("dotenv");

// Handling UnCaught Exception
process.on("uncaughtException", err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down server due to Uncaught Exception`);
    server.close(()=>{
        process.exit(1);
    });
})

    
// Config
dotenv.config({path: "backend/config/config.env"});

// Connect to Database
connectDB();



// Defining a port for the server to run.
const server = app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on http://localhost:${process.env.PORT}`)
});


// Unhandled Promise Rejections
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting Down server due to Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});