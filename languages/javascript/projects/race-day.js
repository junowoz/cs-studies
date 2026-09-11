//Race Day

let raceNumber = Math.floor(Math.random() * 1000);
let register = true;
let early = 'early';
let late = 'late';

let age = 20;

if (age >= 18 && register) {
    raceNumber += 1000;
} 

if (age > 18 && early) {
    console.log('You will race at 9:30 am. Your racenumber is: ' + `${raceNumber}`)
} else if (age > 18 && early == false) {
    console.log('Late adults run at 11:00 am. Your racenumber is: ' + `${raceNumber}`)
} else if (age < 18) {
    console.log('Youth registrants run at 12:30 pm (regardless of registration. Your racenumber is: ' + `${raceNumber}`)
} else {
    console.log('Go see the registration desk.')
}