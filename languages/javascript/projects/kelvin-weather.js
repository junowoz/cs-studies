//Kelvin Weather Converter

let kelvin = 293 //Kelvin
let celsius = kelvin - 273 //Celsius
let fahrenheit = celsius * (9 / 5) + 32 //Fahrenheit
fahrenheit = Math.floor(fahrenheit); //Turning Fahrenheit non-decimal

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);