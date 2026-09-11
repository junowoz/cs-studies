/////////////////////////////////////////////////////////////////////////////////////
/**GLOBALS**/
// console.log is a global function that allows us to log things to the console
console.log("Hello, world!");

// global is a global object that gives us access to certain global properties and methods
// Here we're setting a new property on the global object
global.luckyNumber = "0";
console.log(global.luckyNumber);

// process is another global object that gives us access to information about the current Node process
console.log(process.platform); // prints the current operating system
console.log(process.env.USER); // prints the current username

/////////////////////////////////////////////////////////////////////////////////////
/**EVENTS**/
// This allows us to listen for events and run a callback function when the event is emitted
process.on("exit", function () {
    // do something
});

// We can also create our own custom events
const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
    console.log("eating 🍕");
});

eventEmitter.emit("lunch");

/////////////////////////////////////////////////////////////////////////////////////
/**FILE SYSTEM**/
// Any function that ends with "Sync" is blocking and will wait to complete before moving on
const { readFileSync } = require("fs");
const txt = readFileSync("./hello.txt", "utf8");

console.log(txt);
console.log("do this asap");

// Non-blocking version of reading a file
const { readFile } = require("fs");
readFile("./hello.txt", "utf8", (err, txt) => {
    console.log(txt);
});
console.log("do this asap");

// We can also use Promises to make our code non-blocking and easier to read
const { readFile: myReadFile } = require("fs").promises;

async function hello() {
    const file = await myReadFile("./hello.txt", "utf8");
}

/**MODULES & NPM**/
// Modules are simply JavaScript files that export their code for use in other files
//Common way to import is require(); but we can also user import/export (ES modules)
//This logs prints my object on the my-module.js file

const myModules = require("./my-module");
console.log(myModules);

//If we want to import someone else's module, we can use npm packages
// We can start a package.json file for npm with the command 'npm init -y'
//This will create a package.json file with all the dependencies

//Now, we can install other npm packages, like express. 'npm i express'
// Express is a minimal web application framework (a module for node) very used with node.

// Do not touch the node_modules folder.
// Import express ->
const express = require("express");
const app = express();

// We can use Express to handle incoming requests and send responses
//Request = User's incoming data
//Response = User's outgoing data
app.get("/", (request, response) => {
    readFile("./home.html", "utf-8", (err, html) => {
        if (err) {
            response.status(500).send("Sorry, out of order");
        }
        response.send(html);
    });
});

// We can use Express to start a server and listen for incoming connections
app.listen(process.env.PORT || 3000, () =>
    console.log(`App available on http://localhost:3000`)
);
