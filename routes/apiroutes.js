var db = require("../models");

module.exports = function(app) {
  // app.get("/api/SneaksObjects", function(req, res) {
  //   db.Shoes.findAll(req.body).then(function(Sneakers) {
  //     res.json(Sneakers);
  //   });
  // });

  app.post("/api/newObject", function(req, res) {
    db.Shoes.create(req.body).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  app.put("/api/new", function(req, res) {
    db.Shoes.update({
      highest_bid: req.body.text
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbShoes) {
      res.json(dbSHoes);
    });
  });

  // app.get("/api/SneaksObjects", function(req, res) {
  //   db.Shoes.findAll(req.body).then(function(Sneakers) {
  //     res.json(Sneakers);
  //   });
  // });

  // app.post("/api/new", function(req, res) {
  //   db.Shoes.create(req.body).then(function(Sneakers) {
  //     res.json(Sneakers);
  //   });
  // });

  // app.post("/api/SneaksObjects", function(req, res) {
  //   db.Shoes.update(req.body).then(function(Sneakers) {
  //     res.json(Sneakers);
  //   })
  // });



};
