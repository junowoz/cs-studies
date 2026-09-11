//If we type 'tsc' in the console, it will output the errors!
//TypeScript help us finding bugs in our JavaScript code!

/**
 * TYPES
 */

// Type Inferences: the variable should remain the same type always
let string = "Hi";
let number = 3;
let bool = true;

// Type Shapes: TS knows what types our objects are. If we write toUppercAse
// it will know its wrong. We can check it with 'tsc' and then compile with: node name.js.
let hello = "hello";
console.log(hello.length); //but would trow error if we wrote lenGHt

// Any: It will not be an error if the variable we declare is of Any type.
// For example: let any; in this case we can reassign without getting error.
let any;
any = 3;
any = "Hi";

// Variable Type Annotations
let type: string;
type = "Hello";

//One or another
let oneOrAnother: string | number;
oneOrAnother = "Hello";
oneOrAnother = 3;

//ARRAYS
let namez = ["John", "Mary", "Bob"];

names.push("Mary"); //ok
//names.push(3) //error

let testStringArray: string[]; //only strings
let testArray: any[]; //any type

let testStringOrNumberArray: (string | number)[]; //only strings or numbers

//OBJECTS
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

user.name = "Mary"; //ok
//user.isAdmin = 3 //error

    //Ading ? to a property makes it optional
let userObj: {
  name: string;
  age: number;
  isAdmin: boolean;
  phone?: number; //optional
};

userObj = {
  name: "John",
  age: 30,
  isAdmin: true,
};

userObj = {
  name: "Mary",
  age: 30,
  isAdmin: true,
  phone: 123456789,
};

//Any Type: if we don't provide a type, it will be of any type

let testAny;
testAny = "Hello";
testAny = 3;
testAny = true;
testAny = [2];

let testAnyArray: any[];

testAnyArray = ["Hello", 3, true, [2]];
