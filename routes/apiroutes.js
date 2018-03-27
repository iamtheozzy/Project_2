var db = require("../models");

module.exports = function(app) {
  app.get("/api/SneaksObjects", function(req, res) {
    db.Shoes.findAll(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    });
  });

  app.post("/api/SneaksObjects", function(req, res) {
    db.Shoes.create(req.body).then(function(Sneakers) {
      res.json(Sneakers);
      Sneakers.create({
        name: req.body.name,
        brand: req.body.brand,
        size: req.body.size,
        photos: req.body.photos,
        buy_now: req.body.buynow,
        minimum_bid: req.body.minimumbid

      })
    });
  });

  app.post("/api/SneaksObjects", function(req, res) {
    db.Shoes.update(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    })
  });

  app.get("/api/SneaksObjects", function(req, res) {
    db.Shoes.findAll(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    });
  });

  app.post("/api/SneaksObjects", function(req, res) {
    db.Shoes.create(req.body).then(function(Sneakers) {
      res.json(Sneakers);
      Sneakers.create({
        name: req.body.name,
        brand: req.body.brand,
        size: req.body.size,
        photos: req.body.photos,
        buy_now: req.body.buy_now,
        minimum_bid: req.body.minimum_bid,
        sold: req.body.sold

      })
    });
  });

  app.post("/api/SneaksObjects", function(req, res) {
    db.Shoes.update(req.body).then(function(Sneakers) {
      res.json(Sneakers);
    })
  });



};
