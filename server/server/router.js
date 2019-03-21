var express = require("express");

var router = express.Router();

var localesRouter = require("../routes/locales");

router.use("/locales", localesRouter);

module.exports = router;
