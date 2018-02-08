// Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

// Connects apiRoutes and htmlRoutes to enable usage of dependencies 
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server 
app.listen(PORT, function() {  
     console.log("App listening on PORT " + PORT); 
    });