/**
 * JavaScript Kata Training
 * Codewars Challenges
 * @author: junowoz
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 1
 * Complete the solution so that it reverses the string passed into it.
 *  'world'  =>  'dlrow'
 *  'word'   =>  'drow'
 */

function solution(str){  
    return str.split("").reverse().join("");
}

solution("world")
solution('word')


// i will be an integer. Double it and return it.
function doubleInteger(i) {
  i *= 2;
  return i;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 2
 * We need a function that can transform a number into a string.
 * What ways of achieving this do you know?
 * Examples:
 * 123 --> "123"
 * 999 --> "999"
 */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 3
 * 
 * There was a test in your class and you passed it. Congratulations!
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return True if you're better, else False!
 */

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let average = 0
  
  for (let i in classPoints){
    average += (classPoints[i]) / (classPoints.length)
  }
  
  if (yourPoints > average){
    return true
  } else {
    return false
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 4
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
 * Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 * n= 5, m=5: 25
 */

function paperwork(n, m) {
  if (n < 0 || m < 0)
    return 0
  else
    return n* m
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 5
 * Implement a function which multiplies two numbers.
 */
//The shortest way I found
const multiply = (a, b) => a * b 

//The long way
function multiply(a, b) {
  return a * b
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 6
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 * Use conditionals to return the proper message:
 */

function greet (name, owner) {
  // Add code here
      if (name == owner)
        return 'Hello boss'
      else
        return 'Hello guest'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 7
 * Sure, this is about as easy as it gets. 
 * But how clever can you be to create the most creative hello world you can think of?
 * What is a "hello world" solution you would want to show your friends?
 */
// Write a function "greet" that returns "hello world!"
const greet = greet => 'hello world!'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.

function smash(words) {
  return words.join(" ");
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
 */
function abbrevName(name){
  const nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10
/*
Simple, remove the spaces from the string, then return the resultant string.
 */
function noSpace(x){
  return x.replace(/ /g, '')
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index];
    const diffIndex = nums.indexOf(diff);
    // "diffIndex !== index" takes care of same index not being reused
    if (diffIndex !== -1 && diffIndex !== index) {
      return [index, diffIndex];
    }
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11
/*
Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. */

String.prototype.toJadenCase = function () {
    var returnString = [];
    var words = this.toLowerCase().split(' ');
    
    for (var i = 0; i < words.length; i++) {
        word = words[i];
        returnString.push(word[0].toUpperCase() + word.slice(1));
    }
    return returnString.join(" ");
};