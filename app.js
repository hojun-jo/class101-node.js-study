const express = require("express");
const helmet = require("helmet");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static(__dirname + "/public"));

app.use(helmet());
// post body에서 받기 위해 필요
app.use(express.json());
app.use(express.urlencoded());
// post body에서 받기 위해 필요

const mainRouter = require("./router/mainRouter");
app.use("/", mainRouter);

app.listen(3000, function (req, res) {
  console.log("서버 실행 중");
});
