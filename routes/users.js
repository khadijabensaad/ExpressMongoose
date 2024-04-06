var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/getAll", function (req, res, next) {
  res.json("respond with a resource");
});
/* GET users listing by id. */
router.get("/getAll/:id", function (req, res, next) {
  res.json("recupére by id");
});
/* POST users listing. */
router.post("/formation", function (req, res, next) {
  res.json("add");
});
/* PUT users listing. */
router.put("/formation/:id", function (req, res, next) {
  res.json("update");
});
/* DELETE users listing. */
router.delete("/formation", function (req, res, next) {
  res.json("suppression");
});
module.exports = router;
