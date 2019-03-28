var express = require("express");
var controller = require("../controller/reviewsController");

var ctl = new controller();
var router = express.Router();

router.get("/shop/:id", ctl.getByShop);

router.get("/user/:id", ctl.getByUser);

router.post("/", ctl.post);

router.put("/:id", ctl.put);

router.delete("/:id", ctl.deleteById);

module.exports = router;
