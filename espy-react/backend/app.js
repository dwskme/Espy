const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');
app.use(express.json());


// Routes Imports
const movies =require('./routes/moviesRoute'); 
app.use('/api/v1', movies);	


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;