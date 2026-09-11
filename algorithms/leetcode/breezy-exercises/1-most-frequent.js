// EXERCISE #1: Most frequent word in a sentence
// Count how many times a word is repeated in a string
// and also, which is the most repeated word!
// This is a O(n) algorithm, meaning the time and space scale as the input scales.
/**
 * 1. Most frequent word in a sentence

Write a function mostFrequentWord(sentence) that:

Receives a string like:
"Hello hello there, there is a cat, a big cat!"

Ignores case (treat "Hello" and "hello" as the same).

Ignores punctuation (, ! . etc.).

Returns the word that appears the most times.
If there is a tie, return any one of the most frequent words.

Covers: strings, split, toLowerCase, cleaning, objects as hashmaps, loops.
 */

function mostFrequentWords(sentence) {
  //first I normalize the input
  const clean = sentence
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "");
  //separate words using the space, as a means to split words
  // split() is a string method
  ///\s+/ this is a regex, a regular expression that includes:
  // one space, two spaces, ten spaces, tabs, newlines
  // the + is for 1 or more times
  //the split, creates an array, of strings, concatenated
  const words = clean.split(/\s+/);

  //then we create an objetc that will store each word and how many times it appears
  //remember that objects here are like dictionaries, that store keys and values
  const count = {};

  // maxWord will store the word that appears the most. This is the initialization
  // maxCount will store how many times that word appeared. This is the initialization
  let maxWord = null;
  let maxCount = 0;

  // for ... of is array iteration
  //here we take one word at a time from the list.
  for (const word of words) {
    // ! means NOT. So if the Key doesnt exist (undefined, null, 0 or false)
    //then here we check if that word is already in the cound object.
    // we basically iterate using [word] through each index of the array
    // and then we check if the 'count' objects has it
    if (!count[word]) {
      // count[word] transform [word] in a key inside the object, and gives it value 0
      // { "word": 0 }
      // if we havent seen this word before, we initialize a counter
      count[word] = 0;
    }
    // then we increment the number of the value of the key, that was 0 (just the initialization)
    count[word]++;
  }

  for (const word of words) {
    if (count[word] > maxCount) {
      maxCount = count[word];
      maxWord = word;
    }
  }

  return { count, maxWord };
}

let sentence = "hello hello there there there is a cat cat and a Dog  ";
console.log(mostFrequentWords(sentence));
