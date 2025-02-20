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

const tasksRouter = require("./routes/tasks.js"); 
// mount the router from tasks.js in this line
app.use("/tasks", tasksRouter)

app.get("/", function (req, res) {
  res.send("Hello World");
  // console.log(req);
});

const port = 3000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
