const fs = require("fs");
console.log(fs)
fs.writeFile("data.txt", "Hello World", (err) => {
    if (err) {
        console.log("Error writing file")
    } else {    
        console.log("File written successfully")
    }
});

// function writeCB() {}