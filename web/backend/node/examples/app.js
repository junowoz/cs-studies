/**
 * NodeJS:
 */

/**
 * Global Objects:
 * - console, setTimeout, clearTimeout, setInterval, clearInterval.
 */
console.log(); //Global object to log something to the console, and we can access it from anywhere in our application.

setTimeout(); // Call a function after a delay. Function that runs after a certain amount of time
clearTimeout(); //Function that stops the setTimeout() function

setInterval(); // Repeatedly call a function after a certain delay. Function that runs after a certain amount of time
clearInterval(); // Stop from being called repeatedly.

//Global  object represents our global scope, and we can access things from here.
//Global object is the window object in the browser. For example:

global.console.log(); //Global object to log something to the console, and we can access it from anywhere in our application.
global.setTimeout(); // Call a function after a delay. Function that runs after a certain amount of time
global.clearTimeout(); //Function that stops the setTimeout() function
global.setInterval(); // Repeatedly call a function after a certain delay. Function that runs after a certain amount of time
global.clearInterval(); // Stop from being called repeatedly.

/**
 * Modules: They are for not overwriting the global objects. Like variables with the same name.
 * We encapsulate things; we don't want to pollute the global scope.
 * Every file in Node is a module. Private scope, not available outside the module.
 */

console.log(module); //Module object has a property called exports. This is what we use to expose things from a module.

//Creating a new module to our app -> logger.js

////////////////////////////////////////////////////////////////////////////////

/**
 * Loading a Module:
 */

//Load the logger module (try to always use a constant)
const log = require("./logger");

//Run the log function from the logger module. //We can use the log function from the logger module.
log("message");

/**
 * The module wrapper function:
 *
 * (function (exports, require, module, __filename, __dirname) {
 *   //Module code actually lives in here
 * })
 *
 * - exports: This is the object that is actually returned from the require function.
 * - require: Function to use to load modules.
 * - module: This is the module object that represents the current module.
 * - __filename: The name of the current file.
 * - __dirname: The name of the current directory.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Module System - Built-in Modules:
 * - OS, FS, Events, HTTP, Create your own modules.
 *
 */

//Path module:
const path = require("path"); //This is a core module. It's a built-in module. It's a part of the Node runtime.
var pathObj = path.parse(__filename); //This is a function that we can use to parse a path.

////////////////////////////////////////////////////////////////////////////////
//OS module:
const os = require("os"); //This is a core module. It's a built-in module. It's a part of the Node runtime.
var totalMemory = os.totalmem(); //This is a function that we can use to get the total memory of the machine.
var freeMemory = os.freemem(); //This is a function that we can use to get the free memory of the machine.
console.log(`Total Memory: ${totalMemory}`); //This is a function that we can use to get the files in a directory. It's a synchronous function.
console.log(`Free Memory: ${freeMemory}`); //This is a function that we can use to get the files in a directory. It's a synchronous function.

////////////////////////////////////////////////////////////////////////////////
//File System module:
//Sync version:
const fs = require("fs"); //This is a core module. It's a built-in module. It's a part of the Node runtime.
const files = fs.readdirSync("./"); //This is a function that we can use to get the files in a directory. It's a synchronous function.
console.log(files); //This is a function that we can use to get the files in a directory. It's a synchronous function.

//Async version:
fs.readdir("./", function (err, files) {
    //This is a function that we can use to get the files in a directory. It's an asynchronous function.
    if (err) console.log("Error", err);
    else console.log("Result", files);
});

////////////////////////////////////////////////////////////////////////////////
//Event module: An event is a signal that something has happened in our application.
const EventEmitter = require("events"); // EventEmitter is a class because  of the CAPS. This is a core module. It's a built-in module. It's a part of the Node runtime.
const emitter = new EventEmitter(); //This is a class. We need to create an object of this class.

//Alternative
//Register a listener: The one who listens. The one who registers a listener. The one who reacts to the event.
const Logger = require("./logger"); //Load the logger module (try to always use a constant)
const logger = new Logger();

//The listener has to be registered before the event is raised.
//Register a listener: The one who listens. The one who registers a listener. The one who reacts to the event.
emitter.on("messageLogged", (arg) => {
    //This is a function that we can use to register a listener. The first argument is the name of the event. The second argument is the function that we want to call when the event is raised.
    console.log("Listener called", arg);
});

//EVENT EMITTER:
//You would usually want to create a class that has all the capabilities of the event emitter.
//Raise an event: The one who speaks. The one who emits the event. The one who makes a noise.
//Making a noise, produce - signalling. Raise an event. The value of the event is 'messageLogged'.
emitter.emit("messageLogged", { id: 1, url: "https://" });

logger.log("message"); //Run the log function from the logger module. //We can use the log function from the logger module.

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * HTTP module:
 * - Create a web server that listens to a port and responds to a request with a HTML page.
 */

const http = require("http"); //This is a core module. It's a built-in module. It's a part of the Node runtime.

const server = http.createServer((req, res) => {
    //This is a function that we can use to create a web server.
    if (req.url === "/") {
        //This is a property that we can use to get the URL of the request.
        res.write("Hello World"); //This is a function that we can use to write the response.
        res.end(); //This is a function that we can use to end the response.
    }

    //This is a function that we can use to create a web server.
    if (req.url === "/api/courses") {
        res.write(JSON.stringify([1, 2, 3])); //We need to convert the object to a JSON string.
        res.end();
    }
});

server.listen(3000); //This is a function that we can use to start the server. The first argument is the port number.

logger.log("Listening on port 3000..."); //Run the log function from the logger module. //We can use the log function from the logger module.

//To handle various routes, we use express.