//////////////////////////////////////////////////////////////////////
//Function Declarations

function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}

//Calling a Function :To call a function in your code, you type the function name followed by parentheses

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

//Parameters and Arguments
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks("Cole")

//Default Parameters
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//Return
function monitorCount(rows, columns) {
    total = rows * columns
    return total
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors);

//Helper Functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);
}

//Function Expressions: Function inside a variable
const plantNeedsWater = function (day) { //Anonymous function
  if (day === 'Wednesday') {
    return true
  } else {
    return false
  }
}

console.log(plantNeedsWater('Tuesday'));

//Arrow Functions: A way to create functions whitout saying 'function'. Use =>
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

//Concise Body Arrow Functions
const zeroParameters = () => { }
const oneParameter = paramOne => { }; //1 parameter with curly braces
const plantsNeedsWater = day => day === 'Wednesday' ? true : false; //1 Parameter, in a single line block and instant return
const twoMoreParameters = (paramOne, paramTwo) => {}