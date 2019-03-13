var db = require("../models");
var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  app.get("/marketplace", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/marketplace.html"));
  });

  app.get("/newitem", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/newItem.html"));
  });

  app.get("/member", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/exisitingMember.html"))
  })
  
};
