/**
 * Remove duplicate words (keep first occurrence)

Write a function removeDuplicateWords(sentence) that:

Takes a sentence.

Removes repeated words, keeping only the first occurrence of each word (ignoring case).

Returns a new sentence with a single space between words.

Example:
"Dog dog cat CAT bird" → "Dog cat bird" (case-insensitive for duplicates, but keep original casing of first seen word).

Covers: strings, arrays, Set or hashmaps, loops.
 */

function removeDuplicateWords(sentence) {
  const clear = sentence
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "");
  const splitWords = clear.split(/\s+/);
  const dedup = [...new Set(splitWords)];
  const concatenate = dedup.join(" ");
  return concatenate;
}

const sentence = "Dog dog cat CAT bird";
console.log(removeDuplicateWords(sentence));
