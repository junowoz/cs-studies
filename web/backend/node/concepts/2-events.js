/**
 * The Events Module
 *
 * Node has an event-driven architecture, meaning that we could trigger a certain piece of code
 * even if it's not in the habitual order.
 * In node we have the EventEmitter class, which we can call  by requiring in the events core module.
 */

// Require in the 'events' core module
let events = require("events");

// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

/**
 * Each event emitter instance has an .on() method which assigns a listener callback function to a named event.
 * 1st Argument: name of the event as a string.
 * 2nd Argument: The listener callback function.
 *
 * This also also happens with the .emit() method,  which announces a named event has occurred.
 * 1st Argument: name of the event
 * 2nd Argument: data passed to the listener
 */

//Example:
// Here we require in the 'events' module and save a reference to it in an events variable
let events = require("events");

let listenerCallback = (data) => {
    console.log("Celebrate " + data);
};

let theEmitter = new events.EventEmitter();

theEmitter.on("celebration", listenerCallback);

theEmitter.emit("celebration", "Juan");

////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * User Input/Output
 *
 * output = feedback that a computer provides: console.log()
 * input = data provided to the computer.
 *
 * On the Node environment:
 * stdout.write() = standard output
 * stdin.on() = input from user on the process object
 *
 * example:
 */

let { testNumber } = require("./game.js");

process.stdout.write(
    'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

let playGame = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input);
};

process.stdin.on("data", playGame);

////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Error
 *
 * Example:
 */

//This is how most Node asynchronous APIs are set up to handle errors.
const api = require("./api.js");

// An error-first callback
let errorFirstCallback = (err, data) => {
    if (err) {
        console.log(`Something went wrong. ${err}\n`);
    } else {
        console.log(`Something went right. Data: ${data}\n`);
    }
};

//This is an asynchronous method
api.errorProneAsyncApi("problematic input", errorFirstCallback);

////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The Buffer Module
 * 
 * Used to handle binary data. They are within the global scope: can be accessed anywhere in the environment
 * without importing the module with require().
 * It represents a fixed amount of memory that can't be resized.
 * Buffer objects are similar to an array of integers where each element in the array represents a byte of data. 
 * The buffer object will have a range of integers from 0 to 255 inclusive.
 * 
 * Methods of buffer:
 
 * .alloc() = method creates a new Buffer object with the size specified as the first parameter.
      Size: Required. The size of the buffer
      Fill: Optional. A value to fill the buffer with. Default is 0.
      Encoding: Optional. Default is UTF-8.

 * .toString() method translates the Buffer object into a human-readable string. It accepts three optional arguments:
      Encoding: Default is UTF-8.
      Start: The byte offset to begin translating in the Buffer object. Default is 0.
      End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. 
 
 * .from() = 
 * .concat() = 
 * Example:
 */

//.alloc()
const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]
