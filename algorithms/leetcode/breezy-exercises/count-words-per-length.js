/**
 * 2. Count words per length
Write a function countWordsByLength(sentence) that:
- Takes a sentence string.
- Splits into words and normalizes (lowercase, remove punctuation).
- Returns an object where:
  - the key is the word length,
  - the value is how many words of that length appear.

  Example (conceptually):
    "Hi there cat hi" → { 2: 1, 5: 1, 3: 1 }
    Covers: strings, arrays, objects, loops, number keys.
 */

function countWordsByLength(sentence) {
  const clean = sentence.trim().toLowerCase();
  const words = clean.split(/\s+/);

  const obj = {};

  for (const word of words) {
    const len = word.length;
    obj[len] = (obj[len] ?? 0) + 1;
  }

  return obj;
}

let sentence = "Hi there cat";
console.log(countWordsByLength(sentence));
