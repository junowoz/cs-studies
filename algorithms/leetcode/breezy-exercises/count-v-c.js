/**
 * Count vowels and consonants

Write a function countVowelsAndConsonants(str) that:

Receives a string.

Counts how many letters are vowels (a, e, i, o, u) and how many are consonants.

Ignores spaces, digits, and punctuation.

Returns an object: { vowels: X, consonants: Y }.

Covers: string iteration, conditions, objects, basic logic.
 */

function countVowelsAndConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const clean = str.toLowerCase().trim().replace(/[^\w\s]/g, "");

  const letters = clean.split(/\s+/);

  const obj = { vowels: 0, consonants: 0 };
  let countVowels = 0;
  let countConsonants = 0;

  for (const letter of letters) {
    if (vowels.includes(letter)) {
      countVowels++;
      obj.vowels = countVowels;
    } else {
      countConsonants++;
      obj.consonants = countConsonants;
    }
  }

  return obj;
}

const str = "he";
// {vowels}
console.log(countVowelsAndConsonants(str));
