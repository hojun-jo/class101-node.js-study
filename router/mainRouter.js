const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("index", { title: "EJS 메인 페이지" });
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
