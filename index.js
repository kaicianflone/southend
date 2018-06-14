"use strict";
var express = require("express");
var app = express();

//working code before
app.get("/", function(req, res) {
  res.sendFile("index.html");
});
app.get("/about", function(req, res) {
  res.sendFile("about.html");
});
app.get("/services", function(req, res) {
  res.sendFile("services.html");
});

app.listen(3000);
