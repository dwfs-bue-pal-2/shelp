var express = require("express");
var controller = require("../controller/localesController");
var multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "server/uploads/");
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpeg") {
//     cb(null, true);
//   } else {
//     cb(new Error("File type not accepted."), false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter
// });

var ctl = new controller();
var router = express.Router();

//Locales

router.get("/", ctl.getAll);

router.get("/:id", ctl.getById);

router.post("/",/* upload.single("shopImage"),*/ ctl.post);

router.put("/:id", ctl.put);

router.delete("/:id", ctl.deleteById);

module.exports = router;
