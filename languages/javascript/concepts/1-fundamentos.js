/*
 *Starting my javascript training here!
* I see how the syntaxt is very similar to C programmig language
*/

  console.log("Hello World!");
  console.log("Hello " + "World!")
  
//////////////////////////////////////////////////////////////////////

/*
  Methods
*/

  Math.random(); // Returns a number between 0 and 1

  console.log("Hello".lenght);
  console.log("electro".toUpperCase());
  console.log("Nice".startsWith("N"));  //False or true if the word starts with that letter
  console.log("    Hello    ".trim());

  console.log(Math.floor(Math.random()*80));   // takes a random number, multiplies it by 50 and finds the closest int value

//////////////////////////////////////////////////////////////////////

//Built-In Objects
  console.log(Math.floor(Math.random()*100))
  console.log(Math.ceil(43.8))
  console.log(Number.isInteger(2017))
  
//////////////////////////////////////////////////////////////////////
/* 
  Variables
  let is used when the variable can be changed
  const is when the variable is constant and never changes
*/

  let changeMe = true
  changeMe = false
  console.log(changeMe)
  
  const entree = 'Enchiladas'
  console.log(entree)
  entree = 'Tacos' //Outputs ERROR
  
//////////////////////////////////////////////////////////////////////
//Null
  let something = null; //Represents a void

// UNDEFINED
  var a;
  console.log(a); // Prints: undefined

//////////////////////////////////////////////////////////////////////
//String Concatenation with Variables
  let age = 7;
'Tommy is ' + age + ' years old.'; // String concatenation
  
//TEXT INTERPOLATION text ${expression} text
  `Tommy is ${age} years old.`; // String interpolation

//////////////////////////////////////////////////////////////////////
//typeof Operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

//////////////////////////////////////////////////////////////////////
  /*
  Assignment Operators
  An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:

  += addition assignment
  -= subtraction assignment
  *= multiplication assignment
  /= division assignment
*/

  let number = 100;
  number = number + 10;
  number += 10; // Both statements will add 10
 
  console.log(number); // Prints: 120
  let x = 20;
  x -= 5; // Can be written as x = x - 5
  console.log(x); // Output: 15
  
  let y = 50;
  y *= 2; // Can be written as y = y * 2
  console.log(y); // Output: 100
  
  let z = 8;
  z /= 2; // Can be written as z = z / 2
  console.log(z); // Output: 4

// The Increment and Decrement Operator
  let gainedDollar = 3;
  gainedDollar++
  let lostDollar = 50;
  lostDollar--

//Truly and Falsy Assignment
  let tool = 'marker';
  
//Escaping Literal Quotes in Strings
  const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//////////////////////////////////////////////////////////////////////
// Use short circuit evaluation to assign  writingUtensil variable below:
  let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);