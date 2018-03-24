var db = require("../models");

module.exports = function(app) {
  app.get("/api/shoesObject", function(req, res) {
    db.Shoes.findAll(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    });
  });

  app.post("/api/shoesObject", function(req, res) {
    db.Shoes.create(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    });
  });

  app.update("/api/shoesObject", function(req, res) {
    db.Shoes.create(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    })
  });



};
