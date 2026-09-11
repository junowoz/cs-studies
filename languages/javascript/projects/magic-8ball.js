//Magic Eight Ball

let userName = ''
let ternary = userName || ''

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'am I stoic?'
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
/*Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
In order to make this set of numbers range from 0 (inclusive) to 8 (exclusive)
we can multiple the returned value by 8. 
 */

let eightBall = '';

switch (randomNumber) {
    case 1:
        eightBall = console.log('It is certain');
        break;
    case 2:
        eightBall = console.log('It is decidedly so');
        break;
    case 3:
        eightBall = console.log('Reply hazy try again');
        break;
    case 4:
        eightBall = console.log('Cannot predict now');
        break;
    case 5:
        eightBall = console.log('Do not count on it');
        break;
    case 6:
        eightBall = console.log('My sources say no');
        break;
    case 7:
        eightBall = console.log('Outlook not so good');
        break;
    case 8:
        eightBall = console.log('Signs point to yes');
        break;
    default:
        eightBall = console.log('blablabla?');
}