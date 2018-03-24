var path = require("path");



module.exports = function(app) {

	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// If no matching route is found default to home
	app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
	});

	app.get("/buy", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/buy.html"));
	});

	app.get("/sell", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sell.html"));
	});

	app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
	});
};