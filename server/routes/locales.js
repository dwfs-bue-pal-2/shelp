var express = require("express");
var controller = require("../controller/localesController");

var ctl = new controller();
var router = express.Router();

//Locales

router.get("/", ctl.getAll);

router.get("/:id", ctl.getById);

router.post("/", ctl.post);

router.put("/:id", ctl.put);

router.delete("/:id", ctl.deleteById);

module.exports = router;
