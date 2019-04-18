const express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var router = require("./router");

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.set("port", process.env.PORT || 3000);
app.use("/image", express.static("server/uploads/"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

//app.use(bodyParser.json());

app.use("/", router);

module.exports = app;
