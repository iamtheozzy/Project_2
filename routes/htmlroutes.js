var path = require("path");



module.exports = function(app) {

	app.get("/", function(req, res) {
	// res.sendFile(path.join(__dirname, "../public/index.html"));
		res.render("index");
	});
	// If no matching route is found default to home


	app.get("/about", function(req, res) {
	// res.sendFile(path.join(__dirname, "../public/about.html"));

	res.render("about");

	});

	app.get("/buy", function(req, res) {
	// res.sendFile(path.join(__dirname, "../public/buy.html"));
	res.render("buy");
	});

	app.get("/sell", function(req, res) {
	// res.sendFile(path.join(__dirname, "../public/sell.html"));
	res.render("sell");
	});

	app.get("/contact", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/contact.html"));
	// where does actually link to?
	});

	app.get("/checkout", function(req, res) {
	res.render("checkout");
	});
};
