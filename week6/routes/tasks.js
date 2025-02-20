const express = require("express");
const router = express.Router();
const axios = require("axios");

// this is the handler for the /tasks route
router.get("/", function (req, res) {
  const promise = axios.get("https://jsonplaceholder.typicode.com/todos");
  promise.then((response) => {
    res.json(response.data);
    console.log(response.data);
  });
  console.log(promise);

  // res.send("<h1>List of All Tasks QQQpQ</h1>");
  // console.log(req.params);
  // console.log(req.query);
});

router.get("/:taskId", function (req, res) {
  // res.send('<h1>List of All Tasks QQQQQQ</h1>');
  console.log("I am in the tasks/:taskId route");
  console.log(req.params.taskId);
  // res.send(`<p>you are viewing task ${req.params.taskId}<p>`);
  res.render("task", { id: req.params.taskId });
});

module.exports = router;
