// ============================================================================
// COMPREHENSIVE JAVASCRIPT MANUAL
// A complete guide with runnable examples and detailed explanations
// ============================================================================

console.log("=== JAVASCRIPT MANUAL ===\n");

// ============================================================================
// A. PRIMITIVES
// ============================================================================
// Primitives are atomic values, not objects. They store simple data.

console.log("--- A. PRIMITIVES ---");

const myString = "hello"; // string: text
const myNumber = 42; // number: integers and floats
const myBoolean = true; // boolean: true or false
const myNull = null; // null: intentional empty value
let myUndefined; // undefined: variable declared but not assigned
const myBigInt = 9007199254740991n; // bigint: very large integers
const mySymbol = Symbol("id"); // symbol: unique identifiers

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("BigInt:", myBigInt);
console.log("Symbol:", mySymbol);
console.log();

// ============================================================================
// B. VARIABLES
// ============================================================================
// Variables store primitives or references to objects.

console.log("--- B. VARIABLES ---");

// const: cannot reassign (but can mutate objects/arrays)
const constantValue = 10;
console.log("const constantValue:", constantValue);
// constantValue = 20; // ❌ ERROR: Assignment to constant variable

// let: can reassign
let variableValue = 20;
console.log("let variableValue (initial):", variableValue);
variableValue = 30;
console.log("let variableValue (reassigned):", variableValue);

// var: old-style, function-scoped (avoid in modern code)
var oldStyle = 40;
console.log("var oldStyle:", oldStyle);
console.log();

// ============================================================================
// C. CONTROL FLOW
// ============================================================================
// Control flow decides which path the code takes.

console.log("--- C. CONTROL FLOW ---");

// --- if / else ---
// Use when you have boolean conditions or a small number of branches.
const score = 95;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else {
  grade = "C";
}
console.log(`Score: ${score}, Grade: ${grade}`);

// --- switch ---
// Use when checking the same value against many possible constants.
const day = "Mon";
let dayType;
switch (day) {
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    dayType = "Weekday";
    break;
  case "Sat":
  case "Sun":
    dayType = "Weekend";
    break;
  default:
    dayType = "Unknown";
}
console.log(`${day} is a ${dayType}`);

// --- for (classic) ---
// Use when you need a numeric index or need to iterate a fixed number of times.
console.log("for loop (classic):");
const numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(`  Index ${i}: ${numbers[i]}`);
}

// --- for...of ---
// Use to iterate values of an iterable (arrays, strings, Maps, Sets, etc.).
console.log("for...of loop:");
for (const num of numbers) {
  console.log(`  Value: ${num}`);
}

// --- for...in ---
// Iterates enumerable property names (object keys).
// For arrays it yields string indices ("0", "1", ...).
console.log("for...in loop (object):");
const person = { name: "Alice", age: 30, city: "NYC" };
for (const key in person) {
  console.log(`  ${key}: ${person[key]}`);
}

// --- while ---
// Use when you loop while a condition remains true and don't know iterations in advance.
console.log("while loop:");
let countdown = 3;
while (countdown > 0) {
  console.log(`  Countdown: ${countdown}`);
  countdown--;
}

// --- do...while ---
// Like while but guarantees the loop body runs at least once.
console.log("do...while loop:");
let attempts = 0;
do {
  attempts++;
  console.log(`  Attempt: ${attempts}`);
} while (attempts < 2);

// --- try / catch / finally ---
// Use to handle runtime errors.
console.log("try/catch/finally:");
try {
  const data = JSON.parse('{"valid": true}');
  console.log("  Parsed data:", data);
  // JSON.parse("invalid json"); // uncomment to test error
} catch (error) {
  console.log("  Error caught:", error.message);
} finally {
  console.log("  Cleanup always runs");
}
console.log();

// ============================================================================
// D. FUNCTIONS
// ============================================================================
// Functions encapsulate reusable logic.

console.log("--- D. FUNCTIONS ---");

// --- Function Declaration ---
// Hoisted: you can call it before its declaration in the file.
console.log("Function Declaration:");
console.log("  add(2, 3) =", add(2, 3));
function add(a, b) {
  return a + b;
}

// --- Function Expression ---
// Not hoisted (variable is hoisted but not initialized).
// Can be anonymous or named.
console.log("Function Expression:");
const multiply = function (a, b) {
  return a * b;
};
console.log("  multiply(2, 3) =", multiply(2, 3));

// --- Arrow Function ---
// Shorter syntax. Do NOT have their own `this`, `arguments`, or `new.target`.
// Cannot be used as constructors.
console.log("Arrow Function:");
const square = (n) => n * n;
console.log("  square(5) =", square(5));

// --- Default Parameters ---
function greet(name = "friend") {
  return `Hello, ${name}!`;
}
console.log("Default params:", greet());
console.log("Default params:", greet("Alice"));

// --- Pure vs Impure Functions ---
// Pure: same inputs → same output, no side effects (easy to test)
const pureAdd = (x, y) => x + y;
console.log("Pure function:", pureAdd(10, 20));

// Impure: reads/writes external state
let globalCounter = 0;
function impureBump() {
  globalCounter++;
  return globalCounter;
}
console.log("Impure function (1st call):", impureBump());
console.log("Impure function (2nd call):", impureBump());
console.log();

// ============================================================================
// E. OBJECTS
// ============================================================================
// Objects are dictionaries/hash maps: { key: value }

console.log("--- E. OBJECTS ---");

// Creating an object
const user = {
  name: "Bob",
  age: 25,
  isActive: true,
};
console.log("Object:", user);

// Access properties
console.log("Access (dot):", user.name);
console.log("Access (bracket):", user["age"]);

// Add/update properties
user.email = "bob@example.com";
user["age"] = 26;
console.log("After adding email and updating age:", user);

// Delete properties
delete user.isActive;
console.log("After deleting isActive:", user);

// Check if key exists
console.log("'name' in user:", "name" in user);
console.log("'isActive' in user:", "isActive" in user);

// Use case: grouping data, building lookup tables (hashmaps)
const wordCount = { hello: 2, world: 1 };
console.log("Word count lookup:", wordCount);
console.log();

// ============================================================================
// F. COLLECTIONS (Built-in Data Structures)
// ============================================================================
// These 4 structures solve 95% of interview exercises.

console.log("--- F. COLLECTIONS ---");

// --- 1. ARRAY ---
// Ordered list, index-based.
console.log("1. ARRAY:");
const arr = [1, 2, 3, 4, 5];
console.log("  Initial array:", arr);

// Essential methods
arr.push(6); // add to end
console.log("  After push(6):", arr);
const popped = arr.pop(); // remove from end
console.log("  After pop():", arr, "| popped:", popped);
arr.unshift(0); // add to beginning
console.log("  After unshift(0):", arr);
const shifted = arr.shift(); // remove from beginning
console.log("  After shift():", arr, "| shifted:", shifted);

// Searching
console.log("  includes(3):", arr.includes(3));
console.log("  indexOf(3):", arr.indexOf(3));

// Iteration
console.log("  forEach:");
arr.forEach((item, index) => {
  console.log(`    [${index}]: ${item}`);
});

// Transformation
const doubled = arr.map((x) => x * 2);
console.log("  map(x => x*2):", doubled);

const evens = arr.filter((x) => x % 2 === 0);
console.log("  filter(x => x%2===0):", evens);

const sum = arr.reduce((acc, x) => acc + x, 0);
console.log("  reduce(sum):", sum);

// Search
const found = arr.find((x) => x > 3);
console.log("  find(x > 3):", found);

const hasEven = arr.some((x) => x % 2 === 0);
console.log("  some(x%2===0):", hasEven);

const allPositive = arr.every((x) => x > 0);
console.log("  every(x > 0):", allPositive);

// Sorting
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("  Unsorted:", unsorted);
console.log("  sort() [lexicographic]:", [...unsorted].sort());
console.log(
  "  sort((a,b)=>a-b) [ascending]:",
  [...unsorted].sort((a, b) => a - b)
);
console.log(
  "  sort((a,b)=>b-a) [descending]:",
  [...unsorted].sort((a, b) => b - a)
);

// Sorting objects
const jobs = [
  { task: "A", priority: 3 },
  { task: "B", priority: 1 },
  { task: "C", priority: 2 },
];
jobs.sort((a, b) => a.priority - b.priority);
console.log("  Sorted jobs by priority:", jobs);

// --- 2. OBJECT (already covered above in section E) ---
console.log("\n2. OBJECT: (see section E above)");

// --- 3. MAP ---
// Advanced dictionary: preserves insertion order, keys can be any type.
console.log("\n3. MAP:");
const map = new Map();
map.set("name", "Charlie");
map.set("age", 28);
map.set(42, "answer");
console.log("  map:", map);
console.log("  get('name'):", map.get("name"));
console.log("  has('age'):", map.has("age"));
console.log("  size:", map.size);

console.log("  Iterating map:");
for (const [key, value] of map) {
  console.log(`    ${key} => ${value}`);
}

map.delete("age");
console.log("  After delete('age'):", map);

// --- 4. SET ---
// Unique-value collection: automatically removes duplicates.
console.log("\n4. SET:");
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log("  set:", set); // duplicates removed
set.add(4);
console.log("  After add(4):", set);
console.log("  has(2):", set.has(2));
console.log("  size:", set.size);

set.delete(2);
console.log("  After delete(2):", set);

console.log("  Iterating set:");
for (const value of set) {
  console.log(`    ${value}`);
}
console.log();

// ============================================================================
// G. STRINGS
// ============================================================================
// Essential text operations.

console.log("--- G. STRINGS ---");

let text = "  Hello World  ";
console.log("Original:", `"${text}"`);
console.log("length:", text.length);
console.log("toLowerCase():", text.toLowerCase());
console.log("toUpperCase():", text.toUpperCase());
console.log("trim():", `"${text.trim()}"`);
console.log("split(' '):", text.trim().split(" "));
console.log("split(/\\s+/):", text.trim().split(/\s+/));

const sentence = "hello hello world";
console.log("replace('hello', 'hi'):", sentence.replace("hello", "hi"));
console.log("replaceAll('hello', 'hi'):", sentence.replaceAll("hello", "hi"));
console.log("includes('world'):", sentence.includes("world"));
console.log("indexOf('world'):", sentence.indexOf("world"));
console.log("slice(0, 5):", sentence.slice(0, 5));
console.log("substring(6, 11):", sentence.substring(6, 11));
console.log("startsWith('hello'):", sentence.startsWith("hello"));
console.log("endsWith('world'):", sentence.endsWith("world"));
console.log("charAt(0):", sentence.charAt(0));
console.log("charCodeAt(0):", sentence.charCodeAt(0));
console.log("repeat(2):", "ha".repeat(2));
console.log("padStart(10, '0'):", "5".padStart(10, "0"));
console.log("padEnd(10, '.'):", "test".padEnd(10, "."));
console.log();

// ============================================================================
// H. NUMBERS & MATH
// ============================================================================

console.log("--- H. NUMBERS & MATH ---");

const num = 3.14159;
console.log("num:", num);
console.log("toFixed(2):", num.toFixed(2));
console.log("Math.floor(3.7):", Math.floor(3.7));
console.log("Math.ceil(3.2):", Math.ceil(3.2));
console.log("Math.round(3.5):", Math.round(3.5));
console.log("Math.random():", Math.random());
console.log("Math.max(1,5,3):", Math.max(1, 5, 3));
console.log("Math.min(1,5,3):", Math.min(1, 5, 3));
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.sqrt(16):", Math.sqrt(16));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log();

// ============================================================================
// I. JSON
// ============================================================================
// Standard data exchange format.

console.log("--- I. JSON ---");

const obj = { name: "Dana", age: 32, skills: ["JS", "Python"] };
console.log("Object:", obj);

const jsonString = JSON.stringify(obj);
console.log("JSON.stringify(obj):", jsonString);

const parsed = JSON.parse(jsonString);
console.log("JSON.parse(jsonString):", parsed);
console.log();

// ============================================================================
// J. DATES
// ============================================================================

console.log("--- J. DATES ---");

const now = new Date();
console.log("new Date():", now);
console.log("getFullYear():", now.getFullYear());
console.log("getMonth():", now.getMonth()); // 0-indexed
console.log("getDate():", now.getDate());
console.log("toISOString():", now.toISOString());
console.log();

// ============================================================================
// K. ERROR HANDLING
// ============================================================================

console.log("--- K. ERROR HANDLING ---");

function riskyOperation(shouldFail) {
  if (shouldFail) {
    throw new Error("Operation failed!");
  }
  return "Success";
}

try {
  console.log("Trying safe operation:", riskyOperation(false));
  console.log("Trying risky operation:", riskyOperation(true));
} catch (err) {
  console.log("Caught error:", err.message);
}
console.log();

// ============================================================================
// L. MODULES
// ============================================================================
// (Not runnable in this single-file example, but here's the syntax)

console.log("--- L. MODULES ---");
console.log("export const myFunc = () => {};");
console.log("export default MyClass;");
console.log("import { myFunc } from './module.js';");
console.log("import MyClass from './module.js';");
console.log();

// ============================================================================
// M. ASYNCHRONOUS JAVASCRIPT
// ============================================================================

console.log("--- M. ASYNCHRONOUS JAVASCRIPT ---");

// --- Promises ---
console.log("Promises:");
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved!"), 100);
});

promise
  .then((result) => console.log("  .then():", result))
  .catch((err) => console.log("  .catch():", err))
  .finally(() => console.log("  .finally(): cleanup"));

// --- Async/Await ---
console.log("Async/Await:");
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 100);
  });
}

async function runAsync() {
  try {
    const data = await fetchData();
    console.log("  await result:", data);
  } catch (err) {
    console.log("  error:", err);
  }
}
runAsync();

// Note: fetch() is a browser/Node 18+ API for HTTP requests
// Example: const response = await fetch('https://api.example.com/data');
//          const json = await response.json();
console.log();

// ============================================================================
// N. THE RUNTIME (how JS works behind the scenes)
// ============================================================================

console.log("--- N. THE RUNTIME ---");
console.log(
  "Call stack: LIFO structure where function calls are pushed/popped."
);
console.log("Event loop: processes tasks from the task queue.");
console.log("Task queue: holds callbacks from async operations.");
console.log(
  "Microtasks: Promises, process.nextTick (higher priority than tasks)."
);
console.log("Async execution order: synchronous → microtasks → macrotasks.");
console.log();

// ============================================================================
// O. EXTRA OPERATIONS
// ============================================================================

console.log("--- O. EXTRA OPERATIONS ---");

// --- String operations ---
console.log("String operations:");
const str2 = "example";
console.log("  charAt(2):", str2.charAt(2));
console.log("  charCodeAt(0):", str2.charCodeAt(0));
console.log("  repeat(3):", "x".repeat(3));
console.log("  padStart(10, '-'):", str2.padStart(10, "-"));
console.log("  padEnd(10, '-'):", str2.padEnd(10, "-"));

// --- Array operations ---
console.log("\nArray operations:");
const arr2 = [1, 2, 3, 4, 5];
console.log("  Original:", arr2);
console.log("  slice(1, 3) [non-mutating]:", arr2.slice(1, 3));
console.log("  Original after slice:", arr2);

const arr3 = [1, 2, 3, 4, 5];
const spliced = arr3.splice(2, 2, 99); // remove 2 items at index 2, insert 99
console.log("  splice(2, 2, 99) [mutates]:", arr3, "| removed:", spliced);

const nested = [1, [2, [3, 4]], 5];
console.log("  flat():", nested.flat());
console.log("  flat(2):", nested.flat(2));

const arr4 = [1, 2, 3];
console.log(
  "  flatMap(x => [x, x*2]):",
  arr4.flatMap((x) => [x, x * 2])
);
console.log("  concat([4, 5]):", arr4.concat([4, 5]));
console.log("  join('-'):", arr4.join("-"));

// --- Object operations ---
console.log("\nObject operations:");
const person2 = { name: "Eve", age: 29, city: "SF" };
console.log("  Object.keys():", Object.keys(person2));
console.log("  Object.values():", Object.values(person2));
console.log("  Object.entries():", Object.entries(person2));

const entries = [
  ["a", 1],
  ["b", 2],
];
console.log("  Object.fromEntries():", Object.fromEntries(entries));

// Useful for grouping and counting
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const count = {};
for (const word of words) {
  count[word] = (count[word] || 0) + 1;
}
console.log("  Word count (using object):", count);

// Using Object.entries and reduce
const countReduce = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log("  Word count (using reduce):", countReduce);

console.log("\n=== END OF MANUAL ===");
