// EXERCISE 1 - Most frequent word in a sentence
// Write a function mostFrequentWord(sentence) that:
// Receives a string like: "Hello hello there, there is a cat, a big cat!"
// Ignores case (treat "Hello" and "hello" as the same).
// Ignores punctuation (, ! . etc.).
// Returns the word that appears the most times. If there is a tie, return any one of the most frequent words.
// Covers: strings, split, toLowerCase, cleaning, objects as hashmaps, loops.
function mostFrequentWord(sentence) {
  // define a function that receives a sentence
  const cleaned = sentence.toLowerCase().replace(/[^\w\s]/g, ""); // lowercase and strip punctuation
  const words = cleaned.trim().split(/\s+/); // split the cleaned string into words by spaces
  const counts = {}; // hashmap to store word frequencies
  for (const word of words) {
    // iterate over each word
    counts[word] = (counts[word] || 0) + 1; // increment count or start at 1
  } // end for
  let maxWord = null; // track the most frequent word found so far
  let maxCount = 0; // track the highest frequency seen
  for (const word in counts) {
    // iterate over each key in counts
    if (counts[word] > maxCount) {
      // check if this word beats the current max
      maxWord = word; // update the most frequent word
      maxCount = counts[word]; // update the highest count
    } // end if
  } // end for
  return maxWord; // return the most frequent word (or null if no words)
} // end function mostFrequentWord

// EXERCISE 2 - Count words per length
// Write a function countWordsByLength(sentence) that:
// Takes a sentence string. Splits into words and normalizes (lowercase, remove punctuation).
// Returns an object where the key is the word length and the value is how many words of that length appear.
// Example: "Hi there cat" → { 2: 1, 5: 1, 3: 1 }
// Covers: strings, arrays, objects, loops, number keys.
function countWordsByLength(sentence) {
  // define a function to count words grouped by length
  const cleaned = sentence.toLowerCase().replace(/[^\w\s]/g, ""); // normalize by lowercasing and removing punctuation
  const words = cleaned.trim().split(/\s+/).filter(Boolean); // split into words and drop empties
  const counts = {}; // hashmap where key = length, value = frequency
  for (const word of words) {
    // iterate each word
    const len = word.length; // compute length of current word
    counts[len] = (counts[len] || 0) + 1; // increment count for this length
  } // end for
  return counts; // return object mapping length to count
} // end function countWordsByLength

// EXERCISE 3 - Count vowels and consonants
// Write a function countVowelsAndConsonants(str) that:
// Receives a string. Counts how many letters are vowels (a, e, i, o, u) and how many are consonants.
// Ignores spaces, digits, and punctuation. Returns an object: { vowels: X, consonants: Y }.
// Covers: string iteration, conditions, objects, basic logic.
function countVowelsAndConsonants(str) {
  // define a function that counts vowels vs consonants
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]); // set for quick vowel lookup
  let vowels = 0; // counter for vowels
  let consonants = 0; // counter for consonants
  for (const ch of str.toLowerCase()) {
    // iterate over each character lowercased
    if (!/[a-z]/.test(ch)) continue; // skip non-letters like spaces, digits, punctuation
    if (vowelsSet.has(ch)) {
      // check if character is a vowel
      vowels += 1; // increment vowel counter
    } else {
      // otherwise it is a consonant
      consonants += 1; // increment consonant counter
    } // end if
  } // end for
  return { vowels, consonants }; // return counts in an object
} // end function countVowelsAndConsonants

// EXERCISE 4 - Remove duplicate words (keep first occurrence)
// Write a function removeDuplicateWords(sentence) that:
// Takes a sentence. Removes repeated words, keeping only the first occurrence of each word (ignoring case).
// Returns a new sentence with a single space between words.
// Example: "Dog dog cat CAT bird" → "Dog cat bird" (case-insensitive for duplicates, keep original casing of first seen word).
// Covers: strings, arrays, Set or hashmaps, loops.
function removeDuplicateWords(sentence) {
  // define a function to drop duplicate words
  const seen = new Set(); // set to track words already encountered (lowercased)
  const parts = sentence.split(/\s+/); // split original sentence by spaces (preserve casing per token)
  const result = []; // array to collect kept words
  for (const word of parts) {
    // iterate over every word token
    const key = word.toLowerCase().replace(/[^\w]/g, ""); // normalize word for comparison (lower + strip punctuation)
    if (!key) continue; // skip empty tokens after cleaning
    if (!seen.has(key)) {
      // if this normalized word has not been seen
      seen.add(key); // record it as seen
      result.push(word); // keep the original-cased word
    } // end if
  } // end for
  return result.join(" "); // join kept words with single spaces
} // end function removeDuplicateWords

// EXERCISE 5 - Normalize spaces
// Write a function normalizeSpaces(str) that:
// Receives a string that may contain multiple spaces between words or at the edges.
// Returns the string with no leading/trailing spaces and exactly one space between each word.
// Example: " Hello world this is JS " → "Hello world this is JS"
// Covers: trim, split, join, regex /\s+/ or manual handling.
function normalizeSpaces(str) {
  // define a function to normalize spacing
  return str.trim().split(/\s+/).join(" "); // trim edges, split on runs of spaces, join with single spaces
} // end function normalizeSpaces

// EXERCISE 6 - Reverse each word but keep order
// Write a function reverseWords(sentence) that:
// Reverses the characters of each word, but keeps the original word order.
// Example: "Hello world" → "olleH dlrow"
// Covers: string split, array map, loops, joining.
function reverseWords(sentence) {
  // define a function to reverse characters inside each word
  return sentence // start from the input sentence
    .split(/\s+/) // split into words by whitespace
    .map((word) => word.split("").reverse().join("")) // reverse each word's characters
    .join(" "); // join the reversed words back with single spaces
} // end function reverseWords

// EXERCISE 7 - Check if two sentences are anagrams (ignoring spaces and punctuation)
// Write a function arePhrasesAnagrams(a, b) that:
// Receives two strings. Ignores spaces, punctuation, and case.
// Returns true if they contain the same letters with the same frequencies; otherwise false.
// Covers: strings, normalization, objects as frequency maps, comparison.
function arePhrasesAnagrams(a, b) {
  // define function to compare two phrases as anagrams
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, ""); // helper to strip non-alphanumerics and lowercase
  const buildFreq = (str) => {
    // helper to build frequency map
    const freq = {}; // object to hold char counts
    for (const ch of str) {
      // iterate over each character
      freq[ch] = (freq[ch] || 0) + 1; // increment the count
    } // end for
    return freq; // return the completed map
  }; // end buildFreq
  const normA = normalize(a); // normalize first phrase
  const normB = normalize(b); // normalize second phrase
  if (normA.length !== normB.length) return false; // quick check: different lengths cannot be anagrams
  const freqA = buildFreq(normA); // build frequency map for first phrase
  const freqB = buildFreq(normB); // build frequency map for second phrase
  for (const ch in freqA) {
    // iterate over characters in first map
    if (freqA[ch] !== freqB[ch]) return false; // mismatch in counts means not anagrams
  } // end for
  return true; // all counts match, they are anagrams
} // end function arePhrasesAnagrams

// EXERCISE 8 - Extract digits from a string and sum them
// Write a function sumDigitsInString(str) that:
// Takes any string, extracts all digit characters (0–9), converts each to a number, and returns their sum.
// Example: "Order #A12B3" → 1 + 2 + 3 = 6
// Covers: strings, isNaN or regex, loops, number conversion.
function sumDigitsInString(str) {
  // define function to sum digit characters inside a string
  let total = 0; // accumulator for the sum of digits
  for (const ch of str) {
    // iterate over each character
    if (/\d/.test(ch)) {
      // check if the character is a digit
      total += Number(ch); // convert to number and add to total
    } // end if
  } // end for
  return total; // return the sum of all digit characters found
} // end function sumDigitsInString

// EXERCISE 9 - Count frequency of numbers in an array
// Write a function countNumberFrequency(arr) that:
// Receives an array of integers, returns an object { number: count } with the frequency of each number.
// Example: [1, 2, 2, 3, 3, 3] → { 1: 1, 2: 2, 3: 3 }
// Covers: arrays, objects as hashmaps, loops.
function countNumberFrequency(arr) {
  // define function to count occurrences of numbers
  const counts = {}; // hashmap of number -> frequency
  for (const num of arr) {
    // iterate over each number
    counts[num] = (counts[num] || 0) + 1; // increment count for the number
  } // end for
  return counts; // return the frequency object
} // end function countNumberFrequency

// EXERCISE 10 - Find the most frequent number in an array
// Using a similar idea, write mostFrequentNumber(arr) that:
// Returns the number that appears most often in the array. If the array is empty, return null.
// Covers: arrays, hashmaps, max search.
function mostFrequentNumber(arr) {
  // define function to get the most common number
  if (arr.length === 0) return null; // edge case: empty array returns null
  const freq = countNumberFrequency(arr); // reuse frequency counter from previous function
  let bestNum = null; // track number with highest frequency
  let bestCount = 0; // track highest count
  for (const num in freq) {
    // iterate over frequency map keys
    if (freq[num] > bestCount) {
      // compare counts
      bestNum = Number(num); // update best number (convert key back to number)
      bestCount = freq[num]; // update best count
    } // end if
  } // end for
  return bestNum; // return the most frequent number
} // end function mostFrequentNumber

// EXERCISE 11 - Group words by first letter
// Write a function groupByFirstLetter(words) that:
// Receives an array of words (strings), groups them into an object where keys are the first letter (lowercased)
// and values are arrays of words starting with that letter (keep original casing).
// Example: ["Dog", "cat", "door", "apple"] → { d: ["Dog", "door"], c: ["cat"], a: ["apple"] }
// Covers: arrays, strings, objects, grouping pattern.
function groupByFirstLetter(words) {
  // define function to group words by initial letter
  const groups = {}; // object where key = first letter, value = array of words
  for (const word of words) {
    // iterate over each word
    if (!word) continue; // skip empty strings
    const first = word[0].toLowerCase(); // normalize first character to lowercase for grouping key
    if (!groups[first]) groups[first] = []; // initialize array for this letter if missing
    groups[first].push(word); // add the original-cased word to the group
  } // end for
  return groups; // return grouped object
} // end function groupByFirstLetter

// EXERCISE 12 - Group words by length
// Write a function groupByLength(words) that:
// Receives an array of words, returns an object { length: [words] }.
// Example: ["a", "to", "dog", "cat", "bird"] → { 1: ["a"], 2: ["to"], 3: ["dog", "cat"], 4: ["bird"] }
// Covers: arrays, objects, grouping.
function groupByLength(words) {
  // define function to group words by their length
  const groups = {}; // object where key = length, value = array of words
  for (const word of words) {
    // iterate over each word
    const len = word.length; // compute word length
    if (!groups[len]) groups[len] = []; // create array for this length if absent
    groups[len].push(word); // push word into its length bucket
  } // end for
  return groups; // return grouping
} // end function groupByLength

// EXERCISE 13 - Deduplicate an array of emails (case insensitive)
// Write a function dedupeEmails(emails) that:
// Receives an array of email strings, treats emails as equal ignoring case, and returns a new array with only unique emails,
// preserving the first version of each email.
// Covers: arrays, Set or objects, normalization.
function dedupeEmails(emails) {
  // define function to remove duplicate emails ignoring case
  const seen = new Set(); // set to store normalized emails
  const result = []; // array to keep first occurrences with original casing
  for (const email of emails) {
    // iterate over each email
    const key = email.toLowerCase(); // normalize email for comparison
    if (!seen.has(key)) {
      // if not seen before
      seen.add(key); // record normalized email
      result.push(email); // keep the original email
    } // end if
  } // end for
  return result; // return deduplicated array
} // end function dedupeEmails

// EXERCISE 14 - Merge two arrays and remove duplicates
// Write a function mergeUnique(arr1, arr2) that:
// Receives two arrays of numbers, returns a new array that contains all unique numbers from both arrays (order does not matter).
// Covers: arrays, Set, concatenation.
function mergeUnique(arr1, arr2) {
  // define function to merge arrays uniquely
  return Array.from(new Set([...arr1, ...arr2])); // combine arrays, create a Set for uniqueness, convert back to array
} // end function mergeUnique

// EXERCISE 15 - Sort jobs by priority using a custom order
// Imagine you have an array of job objects like: [{ id: 1, priority: "LOW" }, { id: 2, priority: "HIGH" }, ...]
// Write a function sortJobsByPriority(jobs) that sorts jobs in this order: "HIGH" first, then "MEDIUM", then "LOW".
// Returns a new sorted array (do not mutate the original if possible).
// Covers: arrays, sort with custom comparator, constants.
function sortJobsByPriority(jobs) {
  // define function to sort jobs by priority
  const order = { HIGH: 0, MEDIUM: 1, LOW: 2 }; // map priority to sort weight (smaller = higher priority)
  return [...jobs].sort((a, b) => order[a.priority] - order[b.priority]); // copy array then sort by mapped weights
} // end function sortJobsByPriority

// EXERCISE 16 - Convert an array of objects into a map by id
// Given an array of users like: [{ id: 1, name: "Alice" }, { id: 3, name: "Bob" }, { id: 10, name: "Charlie" }]
// Write a function indexById(users) that returns an object mapping each id to its user object.
// Covers: arrays, reduce or loops, objects.
function indexById(users) {
  // define function to index user objects by id
  const map = {}; // object to store id -> user
  for (const user of users) {
    // iterate over each user
    map[user.id] = user; // assign user object to its id key
  } // end for
  return map; // return the index map
} // end function indexById

// EXERCISE 17 - Filter and group jobs by status
// You have an array of jobs: [{ id: 1, status: "PENDING", technician: "A" }, ...]
// Write a function groupPendingJobsByTechnician(jobs) that filters only jobs with status "PENDING",
// groups them by technician, and returns an object { technicianName: [jobs] }.
// Covers: filter, grouping, objects, arrays – very Breezy/HVAC-like.
function groupPendingJobsByTechnician(jobs) {
  // define function to group pending jobs by technician
  const result = {}; // object where key = technician, value = array of pending jobs
  for (const job of jobs) {
    // iterate over each job
    if (job.status !== "PENDING") continue; // skip jobs that are not pending
    const tech = job.technician; // capture technician name
    if (!result[tech]) result[tech] = []; // initialize list for this technician if missing
    result[tech].push(job); // add pending job to technician's list
  } // end for
  return result; // return grouped pending jobs
} // end function groupPendingJobsByTechnician

// EXERCISE 18 - Flatten a nested array one level
// Write a function flattenOneLevel(arr) that takes an array that may contain nested arrays at one level deep
// (e.g., [1, [2, 3], 4, [5, 6]]) and returns a new array flattened one level: [1, 2, 3, 4, 5, 6].
// Do not use flat() if you want to practice manual logic. Covers: arrays, loops, Array.isArray.
function flattenOneLevel(arr) {
  // define function to flatten one nesting level
  const flat = []; // array to collect flattened values
  for (const item of arr) {
    // iterate over each element
    if (Array.isArray(item)) {
      // if element is an array
      for (const inner of item) {
        // iterate inner array elements
        flat.push(inner); // push inner value to result
      } // end inner for
    } else {
      // element is not an array
      flat.push(item); // push the item directly
    } // end if
  } // end for
  return flat; // return flattened array
} // end function flattenOneLevel

// EXERCISE 19 - Find customers with more than N jobs
// Given jobs like [{ id: 1, customerId: "C1" }, ...], write a function customersWithMoreThan(jobs, minJobs) that:
// Counts how many jobs each customer has and returns an array of customerIds that have strictly more than minJobs jobs.
// Covers: frequency maps, arrays, objects, conditions.
function customersWithMoreThan(jobs, minJobs) {
  // define function to find customers exceeding a job threshold
  const counts = {}; // frequency map of customerId -> job count
  for (const job of jobs) {
    // iterate over each job
    const id = job.customerId; // extract customer id
    counts[id] = (counts[id] || 0) + 1; // increment count for this customer
  } // end for
  const result = []; // array to hold customerIds exceeding threshold
  for (const id in counts) {
    // iterate over counted customers
    if (counts[id] > minJobs) {
      // check if count is strictly greater than minJobs
      result.push(id); // add customerId to result list
    } // end if
  } // end for
  return result; // return array of qualifying customerIds
} // end function customersWithMoreThan

// EXERCISE 20 - Find the first non-repeated character in a string
// Write a function firstNonRepeatedChar(str) that returns the first character in the string that appears exactly once.
// If every character repeats or string is empty, return null. Treat the string as case-sensitive for this exercise.
// Example: "swiss" → 'w'. Covers: frequency counting in two passes, strings, objects.
function firstNonRepeatedChar(str) {
  // define function to find first unique character
  const freq = {}; // frequency map of character -> count
  for (const ch of str) {
    // first pass: count all characters
    freq[ch] = (freq[ch] || 0) + 1; // increment count for character
  } // end for
  for (const ch of str) {
    // second pass: find first character with count 1
    if (freq[ch] === 1) return ch; // return immediately on first non-repeated character
  } // end for
  return null; // if none found, return null
} // end function firstNonRepeatedChar
