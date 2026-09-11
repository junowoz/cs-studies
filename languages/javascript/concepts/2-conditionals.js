//////////////////////////////////////////////////////////////////////
/*
* CONDITIONALS
*/

//If - Else
  if (false) {
    console.log('The code in this block will not run.');
  } else {
    console.log('But the code in this block will!');
  }

//Else If
  const size = 10;
  
  if (size > 100) {
    console.log('Big');
  } else if (size > 20) {
    console.log('Medium');
  } else if (size > 4) {
    console.log('Small');
  } else {
    console.log('Tiny');
  }
// Prints: Small
//////////////////////////////////////////////////////////////////////
/*
 Comparision Operators
  2 > 1
  5 < 10
  5 <= 4
  8 >= 7
  7 === 7
  6 !== 1
*/

let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

//////////////////////////////////////////////////////////////////////
/*Logical Operators OR and AND
OR - if one value is true, returns true.

  AND = &&
  OR = | |
  NOT = !

Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.
*/

  let mood = 'sleepy';
  let tirednessLevel = 6;

  if(mood === 'sleepy' && tirednessLevel > 8){
    console.log('time to sleep');
  }else{
    console.log('not bed time yet');
  }

  true || false;        // true
  10 > 5 || 10 > 20;    // true
  false || false;       // false
  10 > 100 || 10 > 20;  // false

//& -if one value is false, returns false
  true && true;      // true
  1 > 2 && 2 > 1;    // false
  true && false;     // false
  4 === 4 && 3 > 1;  // true

//////////////////////////////////////////////////////////////////////
/*
 Truthy and Falsy Assignment 
 */

let tool = '';
let writingUtensil = tool || 'pen'; //prints the true one

console.log(`The ${writingUtensil} is mightier than the sword.`);

//////////////////////////////////////////////////////////////////////
/*
Ternary Operator
In the example:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
*/

  let isNightTime = true;
  isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
  //Basicamente el ? funciona como el if, y el : como el else. El primer console.log no termina con semicolon

  let favoritePhrase = 'Love That!';
  favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
  
//////////////////////////////////////////////////////////////////////
/*
* Switch Statement
*/

const food = 'salad';
 
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie 🍕');
    break;
  default:
    console.log('Enjoy your meal');
} // Prints: Enjoy your meal

 