const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../db");

router.post("/",async (req,res)=>{
  try {
  console.log(req.body);
  // call addToDB
  await db.addToDB(req.body);
  // res.send("Data received");
  res.redirect("/tasks");
  } catch (error) {
    console.log(error.message);
  }
  
});

// show new form
router.get('/newtask', function (req, res) {
  res.render('taskForm');
});

// this is the handler for the /tasks route
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"

    );
    res.json(response.data);
    

  } catch (error) {
    console.log(error.message);
  }
  // console.log(response);
  /*
  promise
    .then((response) => {
      res.json(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(errors.status);
    });
  console.log(promise);
  */

  // res.send("<h1>List of All Tasks QQQpQ</h1>");
  // console.log(req.params);
  // console.log(req.query);
});

router.get("/:taskId", async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`);
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${req.params.taskId}`);

    console.log(response.data);
    res.render("task", { 
      id: req.params.taskId, 
      title: response.data.title, 
      completed: response.data.completed,
      userName: userResponse.data.name
    });
  } catch (error) {
    console.log(error.message);
  }

  // res.send('<h1>List of All Tasks QQQQQQ</h1>');
  // console.log("I am in the tasks/:taskId route");
  // console.log(req.params.taskId);
  // res.send(`<p>you are viewing task ${req.params.taskId}<p>`);
 
});

module.exports = router;
