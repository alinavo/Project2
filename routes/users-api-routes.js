var db = require("../models");

module.exports = function(app) {

  // Create a new user account
  app.post("/api/new_user", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    })
  })

};
