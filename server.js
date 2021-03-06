// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express(); 
const PORT = process.env.PORT || 3000; 

// Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Starts the server 
app.listen(PORT, function() {  
     console.log("App listening on PORT " + PORT); 
    });