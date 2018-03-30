var express = require("express");
var bodyParser = require("body-parser");
var mysql = require('mysql');
var connection;
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

var db = require("./models");

/*if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: null,
		database: 'Sneaks_DB'
	});
};*/

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Static CSS for entire application
app.use(express.static("public"));

// requires handlebars for managing the application
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiroutes.js")(app);
require("./routes/htmlroutes.js")(app);



// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 });
