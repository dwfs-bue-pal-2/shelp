var express = require("express");

var router = express.Router();

var localesRouter = require("../routes/locales");
var reviewsRouter = require("../routes/reviews");

router.use("/locales", localesRouter);
router.use("/reviews", reviewsRouter);

module.exports = router;
