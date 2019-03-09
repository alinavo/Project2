var db = require("../models");

module.exports = function(app) {

  // Get back specific user and their corresponding posts
  app.get("/api/users/:id", function(req, res) {
      db.Users.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Listing]
      }).then(function(dbUsers) {
          res.json(dbUsers);
      });
  });

  // Create a new user account
  app.post("/api/new_user", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    })
  });

};
