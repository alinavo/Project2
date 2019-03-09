var db = require("../models");

module.exports = function(app) {
  // Gets all active listings from marketplace
  app.get("/api/marketplace", function(req, res) {
    db.Listing.findAll({
      where: {
        active_listing: true,
      },
      include: [db.Users]
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Create a listing for the marketplace
  app.post("/api/list", function(req, res) {
    db.Listing.create(req.body).then(function(dbListings) {
      res.json(dbListings);
    });
  });

  // Set active status of listed item to false
  app.put("/api/list/:id", function(req, res) {
    db.Listing.update({ 
      where: { 
        id: req.params.id,
      } 
    }).then(function(dbListings) {
      res.json(dbListings);
    });
  });
};
