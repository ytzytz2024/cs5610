const fs = require("fs");
console.log(fs)
fs.writeFile("data.txt", "Hello World", (err) => {
    if (err) {
        console.log("Error writing file")
    } else {    
        console.log("File written successfully")
    }

    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file")
        } else {
            console.log(data)
        }
    });
});



// function writeCB() {}