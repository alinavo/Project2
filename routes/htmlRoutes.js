var db = require("../models");
<<<<<<< Updated upstream
var path = require("path");

=======
 var path = require("path");
>>>>>>> Stashed changes
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/main.html"));
  // });

  app.get("/marketplace", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/marketplace.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  app.get("/newitem", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/newItem.html"));
  });
};
