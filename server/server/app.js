const express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var router = require("./router");

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use("/", router);

module.exports = app;
