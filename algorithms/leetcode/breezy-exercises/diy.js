// // Prompt: Write a function that calculates the factorial of a number (e.g., 5! = 54321).

// ///// groupBy

// function groupJobsByTech(jobs) {
//   const result = {};
//   for (const job of jobs) {
//     if (!result[job.tech]) {
//       result[job.tech] = [];
//     }
//     result[job.tech].push({ id: job.id, status: job.status });
//   }
//   return result;
// }

// console.log(groupJobsByTech([
//   { id: 1, tech: "A", status: "completed" },
//   { id: 2, tech: "B", status: "pending" },
//   { id: 3, tech: "A", status: "pending" },
// ]));

// ///////// sort

// const jobss = [
//   { id: 1, status: "completed" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "in_progress" },
// ];

// function sortingByStatus(n) {
//   const sorting = {
//     pending: 0,
//     in_progress: 1,
//     completed: 2,
//   };

//   return jobss.sort((a, b) => sorting[a.status] + sorting[b.status]);
// }

// console.log(sortingByStatus(jobss));

// /////// sum
// const memberships = [{ price: 30 }, { price: 50 }, { price: 2 }];

// function sumAggreg(memberships) {
//   let total = 0;
//   for (const m of memberships) {
//     total += m.price;
//   }

//   return total;
// }

// console.log(sumAggreg(memberships));

// /// find the odd number

// function findOdd(n) {
//   if (n % 2 === 0) {
//     console.log("is even");
//   } else {
//     console.log("is odd");
//   }
//   return;
// }

// findOdd(7);

// most frequent word in a sentennce

//1.
function mostFrequent(sentence) {
  const clean = sentence
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "");
  const words = clean.split(/\s+/);
  const counts = {};

  for (const word of words) {
    counts[word] = (counts[word] ?? 0) + 1;
  }

  let maxWord = null;
  let maxCount = 0;

  for (const w in counts) {
    if (counts[w] > maxCount) {
      maxWord = w;
      maxCount = counts[w];
    }
  }

  return { counts, maxWord };
}

console.log(mostFrequent("most most freq freq word is most"));

// 2. count words per lenght

function countWordsByLength(sentence) {
  //takes string, splits into words and normalizes
  const clearWords = sentence
    .trim()
    .toLowerCase()
    .replace(/[^\s\w]/g, "");
  const words = clearWords.split(/\s+/);
  const object = {};

  //key is the word lenght and the value is how namy words of that lenght appear

  for (const word of words) {
    const len = word.length;
    object[len] = (object[len] || 0) + 1;
  }

  return object;
}

console.log(countWordsByLength("this i a this a"));

// 3. count vowels and consonants

function countVowelsAndConsonants(sentence) {
  const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (const char of sentence) {
    if (vowelsSet.has(char)) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }
  }

  return { vowelsCount, consonantsCount };
}

console.log(countVowelsAndConsonants("this is a sentence"));

//  4. remove duplicated words

function removeDuplicateWords(string) {
  const split = string.split(/\s+/)
  const dedup = [...new Set(split)]
}

// function countWordsByLength(str) {
//   // me explique o que um set faz aqui, qual e a funcao de um set
//   const vowels = new Set(["a", "e", "i", "o", "u"]);
//   const clea
// }

// //declaration
// function a (b) {

// }

// //expression
// const a = function (c,d) {

// }//arrow
// const arrowFunc = (a,b) => {return a;}

// // arrays
// const arr = [1,2,3,4,5]
// // arrays methods

// console.log(Math.max(arr))
