//Access Multi-Dimensional Arrays With Indexes
    const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
    ];

    //Select Number 8
    const myData = myArray[2][1];

//Manipulate Arrays With push(): adds item at the end
    const myArrayy = [["John", 23], ["cat", 2]];
    myArray.push(['dog', 3]);

//Manipulate Arrays With unshift(): adds item at the beginning
    const myArrayyy = [["John", 23], ["dog", 3]];
    myArray.shift();
    myArray.unshift(['Paul', 35]);
    
//Manipulate Arrays With pop(): remove last item
    const myArrayyyy = [["John", 23], ["cat", 2]];
    const removedFromMyArrayy = myArray.pop();

//Manipulate Arrays With shift(): remove first item
    const myArryay = [["John", 23], ["cat", 2]];
    const removedFromMyArrayyy = myArray.shift();

//Shopping List
    const myList = [
        ['Banana', 12],
        ['Cookie', 43],
        ['Car', 4399],
        ['Chocolate', 5],
        ['Berries', 1]
    ];

/**************************************************************/
//Write Reusable JavaScript with Functions
    function reusableFunction(){
    console.log('Hi World');
    }
    reusableFunction();

//Passing Values to Functions with Arguments
    function functionWithArgs(a, b) {
    console.log(a + b);
    }
    functionWithArgs(2, 4);
    
//Return a Value from a Function with Return
    function timesFive(a) {
        return a * 5;
    }
    const answer = timesFive(1);
    
//Global Scope and Functions
    const myGlobal = 10;
    function fun1() {
        oopsGlobal = 5;
        }

    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }

//Local Scope and Functions
    function myLocalScope() {
    const myVar = 3;
    console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    console.log('outside myLocalScope', myVar);
    
//Global vs. Local Scope in Functions: the local function wins
    const outerWear = "T-Shirt";

    function myOutfit() {
    const outerWear = 'sweater';
    return outerWear;
    }

    myOutfit();
    
//Understanding Undefined Value returned from a Function
    let sum = 0;

    function addThree() {
    sum = sum + 3;
    }

    function addFive() {
    sum = sum + 5;
    }

    addThree();
    addFive();

//Assignment with a Returned Value
    let processed = 0;

    function processArg(num) {
    return (num + 3) / 5;
    }

    processed = processArg(7);
    
// Stand in Line
    function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
    }
    let testArr = [1, 2, 3, 4, 5];

    console.log(nextInLine(testArr, 6));
    console.log("After: " + JSON.stringify(testArr));
    
// Understanding Boolean Values
    function welcomeToBooleans() {
    return true; 
    }

//Use Conditional Logic with If Statements
    function trueOrFalse(wasThatTrue) {
        if (wasThatTrue) {
            return "Yes, that was true";
        }
            return "No, that was false";
    }

//Comparison with the Equality Operator
// == evaluates a comparison, if its true or false
    function testEqual(val) {
    if (val == 12) {
        return "Equal";
        }
    return "Not Equal";
        }
    testEqual(10);

// Comparison with the Strict Equality Operator
    3 ===  3  // true
    3 === '3' // false

// Comparison with the Inequality Operator
    1 !=  2    // true
    1 != "1"   // false
    1 != '1'   // false
    1 != true  // false
    0 != false // false

// Comparison with the Strict Inequality Operator
    3 !==  3  // false
    3 !== '3' // true
    4 !== 3  // true
    
//Comparison with the Greater and Less Than Operator
    5   >  3  // true
    7   > '3' // true
    2   >  3  // false
    '1' > 9  // false
    
    2   < 5 // true
    '3' < 7 // true
    5   < 5 // false
    3   < 2 // false
    '8' < 4 // false
     
//Comparison with the Greater/Less Than Or Equal To Operator
    6   >=  6  // true
    7   >= '3' // true
    2   >=  3  // false
    '7' >=  9  // false

    4   <= 5 // true
    '7' <= 7 // true
    5   <= 5 // true
    3   <= 2 // false
    '8' <= 4 // false
    
/****************************************************************************/
//Comparisons with the Logical AND Operator
    function testLogicalAnd(val) {
    if (val <= 50 && val >= 25 ) {
        return "Yes";
    }
    return "No";
    }

testLogicalAnd(10);
    
//Comparisons with the Logical OR Operator
    function testLogicalOr(val) {
    if (val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";
    }

testLogicalOr(15);
    
// if - else - else if
    if (val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";

//Logical Order in If Else Statements
    function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

//Chaining If Else Statements
    function testSize(num) {
        if (num < 5) {
            return 'Tiny'
        } else if (num < 10) {
            return 'Small'
        } else if (num < 15) {
            return 'Medium'
        } else if (num < 20) {
            return 'Large'
        } else { (num >= 20)
            return 'Huge'
        }

        return "Change Me";
    }

testSize(7);

// Golf Code
    const names = [
        "Hole-in-one!",
        "Eagle",
        "Birdie",
        "Par",
        "Bogey",
        "Double Bogey",
        "Go Home!"
    ];

    function golfScore(par, strokes) {
        if (strokes == 1) {
            return names[0];
        } else if (strokes <= par - 2) {
            return names[1];
        } else if (strokes == par - 1) {
            return names[2];
        } else if (strokes == par) {
            return names[3];
        } else if (strokes == par + 1) {
            return names[4];
        } else if ( strokes == par + 2) {
            return names[5];
        } else { (strokes >= par + 3)
            return names[6];
        }

    return "Change Me";
    }
golfScore(5, 4);

// Selecting from Many Options with Switch Statements
    function caseInSwitch(val) {
    let answer = "";

        switch (val) {
            case 1:
                answer = "alpha"
                break
            case 2:
                answer = "beta"
                break
            case 3:
                answer = "gamma"
                break
            case 4:
                answer = "delta"
                break
        }
        
    return answer;
    }

    caseInSwitch(1);

//Adding a Default Option in Switch Statements
    function switchOfStuff(val) {
        let answer = "";
        
        switch (val) {
            case 'a':
                answer = "apple"
                break
            case 'b':
                answer = "bird"
                break
            case 'c':
                answer = "cat"
                break
            default:
                answer = "stuff"
                break
        }
        
    return answer;
    }

    switchOfStuff(1);

//Multiple Identical Options in Switch Statements
    function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
        answer = "Low";
        break;
        case 4:
        case 5:
        case 6:
        answer = "Mid";
        break;
        case 7:
        case 8:
        case 9:
        answer = "High";
        break;
    }
    return answer;
    }

sequentialSizes(1);

//Replacing If Else Chains with Switch
    function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val){
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine"
    } 

    return answer;
    }

    chainToSwitch(7);

//Returning Boolean Values from Functions
    function isLess(a, b) {
    return a < b;
    }
    isLess(10, 15);

//Return Early Pattern for Functions: When we get to a return, that's the end.
    function abTest(a, b) {
        if (a < 0 || b < 0) {
            return undefined
        }
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }

    abTest(2, 2);

//Counting Cards
    let count = 0;

    function cc(card) {
        switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count ++;
                break;
            case 10:
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                count --;
                break;
        }

        if (count > 0) {
            return count + ' Bet'
        } else {
            return count + ' Hold'
        }
    return "Change Me";
    }

    cc(2); cc(3); cc(7); cc('K'); cc('A');

/**********************************************************************************/
//Build JavaScript Objects: Arrays have Indexes, Objects have Properties
    const myDog = {
    'name': 'Juno',
    'legs': 4,
    'tails': 5,
    'friends': ['Face', 'Brandon', 'Pocho']

    };

    //Accessing Object Properties with Dot Notation
    const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
    };

    const hatValue = testObj.hat;
    const shirtValue = testObj.shirt; 

//Accessing Object Properties with Bracket Notation
    const testObjj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
    };

    const entreeValue = testObjj['an entree'];
    const drinkValue = testObjj['the drink'];

    //Accessing Object Properties with Variables
    const testObjjj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
    };

    const playerNumber = 16;
    const player = testObjjj[playerNumber];

    console.log(testObj[playerNumber]); //This last line searches the object 16 and displays its value.

// PLAYING WITH OBJECTS
    const myDDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
    };

    myDDog.name = 'Happy Coder'; //Updating Object Properties
    //or
    myDDog['name'] = 'Happy Coder'; //Updating Object Properties

    myDDog.bark = 'woof'; //Add New Properties to a JavaScript Object
    //or
    myDDog['bark'] = 'woof'; //Add New Properties to a JavaScript Object

    delete myDDog.tails; //Delete Properties from a JavaScript Object

//Using Objects for Lookups
    function phoneticLookup(val) {
        var result = '';
        
        const lookup = {
            'alpha': "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "Frank"
        }

        result = lookup[val];
        return result;
    }

//Testing Objects for Properties: .hasOwnProperty(name of the property)
    function checkObj(obj, checkProp) {
        if (obj.hasOwnProperty(checkProp)) {
            return obj[checkProp]
        } else {
            return 'Not Found';
        }
        
    }

//Manipulating Complex Objects
    const myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
                "formats": [
                "CD",
                "8T",
                "LP"
                ],
            "gold": true
        },
        {
            'artist': 'Garrix',
            'title': 'Sentio',
            'release_year': 2022,
            'formats': [
                'CD',
                'MP3',
                'LP'
                ]
        }
    ];

//Accessing Nested Objects
    const myStorage = {
    "car": {
        "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
        },
        "outside": {
        "trunk": "jack"
        }
    }
    };

    const gloveBoxContents = myStorage.car.inside['glove box'];
    //or 
    const gloveBoxContentss = myStorage.car['outside'].trunk; 

//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== '') {
        records[id][prop] = value;
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
        records[id][prop] = [value];
    } else if (prop === 'tracks' && value !== '') {
        records[id][prop].push(value);
    } else if (value === '') {
        delete records[id][prop];
    }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/********************************Iterate******************************************/
//While
const myArra = [];
let i = 5

while (i >= 0) {
    myArra.push(i)
    i--;
}

//For Loops
// for (a; b; c), where a is the initialization statement, 
// b is the condition statement, and c is the final expression.
    const miArray = [];
    for (let i = 1; i < 6; i++) {
        miArray.push(i)
    }

 //Iterate Even and Odd Numbers With a For Loop
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

for (let i = 1; i <=9; i+=2) {
    ourArray.push(i)    
}

let text = ourArray.toString();
console.log(text);

//Count Backwards With a For Loop

for (let i = 9; i > 0; i-=2) {
    ourArray.push(i)    
}

//Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];

let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]; 
}

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];   
        }        
    }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops
//DO- WHILE LOOPS
do {
  ourArray.push(i);
  i++;
} while (i < 5);
//This and these are basically the same
while (i < 5) {
  ourArray.push(i);
  i++;
}

//So, in this exercise, do the following things:
const mmyArray = [];
let ii = 10;

do {
    mmyArray.push(i);
    ii++;
} while (ii === 10);

//Replace Loops using Recursion
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

//Profile Lookup
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    if (name ){
        return true
    } else {
        console.log('No such contact')
    }
}

lookUpProfile("Akira", "likes");