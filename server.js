
var express = require("express");
//var path = require("path");
//geting api routes

//set up the express app
var app = express();
//Choose a local server port
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Using API and html routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//connecting server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});