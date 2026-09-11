let name = "Linda"
let greeting = "Hi there"

////////////////////////////////////////////////////////////////////////////
// Create a function that logs out "Hi there, Linda!" when called

function greetLinda() {
    console.log(greeting + ", " + name);
}

greetLinda();

////////////////////////////////////////////////////////////////////////////
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points(){
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}
add3Points();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

//////////////////////////////////////////////////////////////////////////////
//Spread Operator
let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,          //By putting the ... we are copying the person object
    salary: 50000,
    position: "Software Developer"
}

console.log(employee); //prints person + salary and position

//////////////////////////////////////////////////////////////////////////////
/*
    **** Challenge ****
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "bread", "pasta"] //Im copying the array and adding new values
console.log(shoppingBasket);

//////////////////////////////////////////////////////////////////////////////
//Rest Operator

function add(...nums) { //This way i transform the add into an array
    console.log(nums);

}

add(4, 5, 6, 7, 8, 9)

//////////////////////////////////////////////////////////////////////////////
// Different ways of doing functions
//Arrow Functions
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken salad"));

//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//////////////////////////////////////////////////////////////////////////////
// Default Params
// If i dont pass any value to the artist, it will display someone by default
const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of ColdPlay`);
}
leadSinger();
leadSinger("Justin");
// If I do pass something  to the artist, it will display the one i choose.

//Challenge

const challenge = (food = "something") => `I'm going to buy ${food} from the grocery shop`
console.log(challenge()); 

//Another way to do it
function foodShopping( food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping();

//////////////////////////////////////////////////////////////////////////////
//includes()
let numArray = [1,2,3,4,5];
console.log(numArray.includes(2)) //validates with a boolean if there is something there [true]

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/
const listIngredients =  [ "flour", "sugar", "eggs", "butter", "chocolate"];

if (listIngredients.includes("chocolate")) {  //if true, then
    console.log("We are going to make a chocolate cake");
} else {  //if false, then
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate");
}

//////////////////////////////////////////////////////////////////////////////
//Import & Export example.js
/**
export const data = [1, 2, 3]; //here I export

//index.js -- another file
import { data } from './example.js';
        
    updatedData.push(5)
    console.log(updatedData);


 * Challenge 
 * Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
 * Make sure to export this function.
- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;
 

//data.js
export function add(x, y) {
    return x + y;
}

//index.js
import { add } from "./data.js";
let result = add(3, 2);
console.log(result);
*/

//////////////////////////////////////////////////////////////////////////////
//padStart() & padEnd()
let example = 'Dylan';
console.log(example.padEnd(10, 'a'));
//Dylanaaaaaaaa

let exa = 'Dylan';
console.log(exa.padStart(10, 'a'));
//aaaaaDylan


//////////////////////////////////////////////////////////////////////////////
/**
 *Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
 */

class Player {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }
    
    introduce() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

const messi = new Player("Messi", "Argentina");

messi.introduce();

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }
    
    playTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`);
    }
}

const roger = new TennisPlayer( "Roger Federer", "Spain", 38);

roger.introduce();
roger.playTennis();

//////////////////////////////////////////////////////////////////////////////
//Trailing Commas