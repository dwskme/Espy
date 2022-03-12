const express = require('express');
const app = express();

app.use(express.json());


// Routes Imports
const movies =require('./routes/moviesRoute'); 
app.use('/api/v1', movies);	




module.exports = app;