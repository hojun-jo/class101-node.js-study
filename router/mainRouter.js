const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("main", { title: "movie review site" });
});

router.post("/review/create", function (req, res) {
  let movie_id = req.body.movie_id;
  let review = req.body.review;
});

router.get("/about", function (req, res) {
  res.send("About Page");
});

router.post("/postapi", function (req, res) {
  let body = req.body;
  console.log(body);
  res.send("POST API");
});

module.exports = router;
