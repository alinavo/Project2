var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/main.html"));
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
