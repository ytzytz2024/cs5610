/*
const fs = require("fs");
// console.log(fs)
fs.writeFile("data.txt", "Hello World", (err) => {
    if (err) {
        console.log("Error writing file")
    } else {    
        console.log("File written successfully")
    }

    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    });
});
*/

// function writeCB() {}

/*
const logger = require("./logger.js"); 
console.log(logger.version);
logger.log();
*/

const express = require("express");
const app = express();
// console.log(app);
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send("Hello World");
  // console.log(req);
});

app.get("/tasks", function (req, res) {
  res.send("<h1>List of All Tasks QQQpQ</h1>");
  console.log(req.params); 
  console.log(req.query);
});

app.get("/tasks/:taskId", function (req, res) {
  // res.send('<h1>List of All Tasks QQQQQQ</h1>');
  console.log("I am in the tasks/:taskId route");
  console.log(req.params.taskId);
  res.send(`you are viewing task ${req.params.taskId}`);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
