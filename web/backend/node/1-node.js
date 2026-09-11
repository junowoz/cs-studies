/////////////////////////////////////////////////////////////////////////////////////
/*
 * RUNNING A PROGRAM WITH NODE
 * */

// To access node, just type 'node' in the console
console.log("Hello, World!");
// Then on the console, type 'node 1_node.js', and node will run your program.

//Example:
let noun1 = "man";
let adjective = "happy";
let noun2 = "adult";
let verb = "jump";
let noun3 = "potatoes";

console.log(
    `The world's first ${noun1} was a very ${adjective} ${noun2} who loved to ${verb} while eating ${noun3} for every meal.`
);

/////////////////////////////////////////////////////////////////////////////////////
/*
 * CORE MODULES
 * */

// Once in the REPL, a complete list of core modules can be accessed by typing the command:
// require('module').builtinModules

// For example: Require in the 'events' core module:
const events = require("events");

/////////////////////////////////////////////////////////////////////////////////////
/*
* The Console Module
The console object provides many of the same familiar methods such as:
.log() — to print messages to the terminal.
.assert() — to print a message to the terminal if the value is falsy.
.table() — to print out a table in the terminal from an object or array.
 */

const petsArray = ["dog", "cat", "bird", "monkey"];
// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);

/////////////////////////////////////////////////////////////////////////////////////
/**
 * The Process Module
 */
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2]; //this inputs the word I choose before typing 'node 1_node.js ' in the terminal

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
    wordArray.push(`${word} count: ${i}`);
}

console.log(
    `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
        process.memoryUsage().heapUsed
    }. \nAfter using the loop to add elements to the array, the process is using ${
        process.memoryUsage().heapUsed - initialMemory
    } more bytes of memory.`
);
//then run with node 1_node.js

/////////////////////////////////////////////////////////////////////////////////////
/**
 * The OS Module
 */

const os = require("os");

const local = {
    "Home Directory": os.homedir(),
    "Operating System": os.type(),
    "Last Reboot": os.uptime(),
};

console.log(local);

/////////////////////////////////////////////////////////////////////////////////////
/**
 * The Util Module
 */
// Require in trails module from trails.js
const trails = require("./trails.js");
// Require in util module here
const util = require("util");
// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
    return setTimeout(() => {
        if (trails.hasOwnProperty(trail)) {
            const foundTrail = trails[trail];
            callback(null, foundTrail);
        } else {
            callback(new Error("Trail not found!"));
        }
    }, 1000);
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
    if (error) {
        console.error(error.message);
        process.exit(1);
    } else {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`);
    }
}

getTrailDistance("North Country", callback);

// Promisfy below!

const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise("North Country")
    .then((foundTrail) => {
        const nickname = foundTrail.nickname;
        const mi = foundTrail.miles;
        console.log(`The ${nickname} is ${mi} miles long!`);
    })
    .catch((error) => {
        console.log("Trail not found!", error);
    });

/////////////////////////////////////////////////////////////////////////////////////
/**
 * Implementing Modules in Node
 */

/* EXPORT - module.exports*/
function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

//Second option to export
module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};

/** IMPORT - require()**/
const converters = require("./converters.js");

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

//Using Object Destructuring to be more Selective With require()
const { celsiusToFahrenheit } = require("./converters.js");
// This way, we are choosing the specific celsiusToFahrenheit function inside converters.js

/////////////////////////////////////////////////////////////////////////////////////
//Code Challenge
/**
 * Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:
    circleArea(radiusLength).
    squareArea(sideLength).
 */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

module.exports.circleArea = function (radiusLength) {
    return PI * radiusLength * radiusLength;
};

module.exports.squareArea = function (sideLength) {
    return sideLength * sideLength;
};

//ALTERNATIVE FORM
const PiI = Math.PI;

function circleArea(r) {
    return PiI * r * r;
}
function squareArea(side) {
    return side * side;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

/////////////////////////////////////////////////////////////////////////////////////
//Code Challenge 2
const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.

const areaFunctions = require("./shape-area.js");

// Option 2: import circleArea and squareArea with object destructuring

const { circleArea, squareArea } = require("./shape-area.js");

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);
