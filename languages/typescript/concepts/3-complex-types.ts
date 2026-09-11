///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arrays: In TS, they look like this:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ["chicken soup", "non-chicken soup"];
let bestBooleans: boolean[] = [true, false];
let namess: Array<string> = ["Danny", "Samantha"];

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi-dimensional Arrays: The empty array ([]) is compatible with any array type:
let arrr: string[][] = [
    ["str1", "str2"],
    ["more", "strings"],
];
let numbersMulti: number[][][] = [
    [[1], [2, 3]],
    [[7], bestNumbers],
];
let names: string[] = []; // No type errors.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Tuples: In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.
//With TypeScript, we can also define arrays with a fixed sequence of types.
// an array is expandable while a tuple is not, hence, an array cannot be assigned to a tuple.

let ourTuple: [string, number, string, boolean] = [
    "Is",
    7,
    "our favorite number?",
    false,
];

//Another example
let tup: [string, string] = ["hi", "bye"];
let arr: string[] = ["there", "there"];
tup = ["there", "there"]; // No Errors.

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array Type Inference:  type inference returns arrays. When we want tuples, we need to use explicit type annotations.
//Here we learn the .concat method. Which adds upp all the terms in a single []

// Common way
let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

//A way to infer the type
let myArr = dogTup.concat('hello');
myArr[50] = 'not a dog'

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Rest Parameters: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
//Assigning types to rest parameters is similar to assigning types to arrays.

function fun(firstString, ...otherStrings: string[]) {
    //Function
}

function addPower(p: number, ...numsToAdd: number[]): void {
    //Function 2
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Spread Syntax
 * In TypeScript, the spread operator (denoted by three dots "...")
 *  allows an iterable (e.g. an array or string) to be expanded in places where multiple arguments are expected. 
 * For example, when calling a function, the spread operator can be used to pass the elements of an array as separate arguments to the function.
 * */
function performDanceMove(
    moveName: string,
    moveReps: number,
    hasFlair: boolean
): void {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log("I do it with flair!");
    }
}

let danceMoves: [string, number, boolean][] = [
    ["chicken beak", 4, false],
    ["wing flap", 4, false],
    ["tail feather shake", 4, false],
    ["clap", 4, false],
    ["chicken beak", 4, true],
    ["wing flap", 4, true],
    ["tail feather shake", 4, true],
    ["clap", 4, true],
];

// The code uses the forEach() method to iterate through the danceMoves array and for each sub-array.
danceMoves.forEach((move) => performDanceMove(...move));

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUIZ 1: Which of the following function calls will produce a type error for the function, range(), which takes a rest parameter as an argument?
const range = (...myData: number[]) => {
    myData.sort();
    return myData[myData.length - 1] - myData[0];
};

//range([3, 7, 5]);

/**************************************************/
//QUIZ: 2 Fill in the code with the correct return type for the function mySort().
const mySort = (...mixed): any[] => {
  mixed.sort();
  return mixed;
}
 
console.log(mySort('March', undefined, 5, 'Zoo', true, null)); 
// Prints [5, "March", "Zoo", null, true, undefined]

/**************************************************/
//QUIZ 3: Consider the following code snippet. What would be the correct type for the variable, updated?
const headlines: [string, boolean, string] = ["It is", true, "!"];
const more = ["This is not", false, "news."];
let updated = headlines.concat(more);

// Well done! The result of a .concat() operation is an array, however, since the types of the elements are not uniform, the correct type is any[].

/**************************************************/
//QUIZ 4: Which of the following code snippets will generate a TypeScript type error?
//let areacodes: number[] = [617, 413, 857, null];
//areacodes is an array of numbers, and TypeScript will flag an error, Type 'null' is not assignable to type 'number'. because of the null value in the array.

let answers: boolean[] = [];

/**************************************************/
//QUIZ 5: Which of the following is a valid function call for policy()?

const policy = (name: string, age: number, minor: boolean) => {
  if (minor) {
    console.log(`No wine or alchohol purchase allowed for ${name} who is ${age} years old.`);
  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CUSTOM TYPES