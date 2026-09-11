/**
 * We can intrepolate and write large strings by using `string`
 */

let hello = 'hello'
let world = 'world'

const full = ` ${hello} 

${world}
`

console.log(full);
////////////////////////////////////////////////////////////////

/**
 * Object Destructuring
 */

const player = {
  nam: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

        // console.log( player.address.city );

const { nam, club, address: { city } } = player;

        // console.log(`${name} plays for ${club}`);

console.log(`${nam} lives in ${city}`);

//Challenge
const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student;
console.log(`${name} is ${age} and this is ${diceGame}`);

////////////////////////////////////////////////////////////////

/**
 * Destructuring Arrays
 */

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)

////////////////////////////////////////////////////////////////

/**
 * Object Literal
 */

function addressMaker(city, state) {
    const newAdress = {city, state}; //This is an object
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');

//Challenge

function addressMaker(address) {
    const { city, state } = address;
    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({ city: 'Austin', state: 'Texas' });

////////////////////////////////////////////////////////////////

/**
 * For of Loop
 */

let fullName = "Dylan Coding God Israel";

for (const char of fullName) {
    console.log(char);
}

let ages = [12, 34, 312, 4543, 2];

for (const integer of ages) {
    console.log(integer);
}

// Challenge - For Of Loop
// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for ( const studen in students) {
    console.log(studen.name + ' lives in ' + student.city);
}

////////////////////////////////////////////////////////////////

/**
 * Spread Operator
 */