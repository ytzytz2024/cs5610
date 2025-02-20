const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("<h1>List of All Tasks QQQpQ</h1>");
  console.log(req.params);
  console.log(req.query);
});

router.get("/:taskId", function (req, res) {
  // res.send('<h1>List of All Tasks QQQQQQ</h1>');
  console.log("I am in the tasks/:taskId route");
  console.log(req.params.taskId);
  res.send(`<p>you are viewing task ${req.params.taskId}<p>`);
});

module.exports = router;