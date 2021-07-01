/* Running Totals

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Input array
Output array

Take the array and return a new array with the same num of elements but each element is the sum with the previous.
Empty array > return empty array.
Unique elelmeent return unique element unchanged.

Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // [] 

Data structure
Arrays

Algorithm:

A 2, 5, 13
B 2, (2 + 5 = 7), (7 + 13 = 20)




take the array
declare a new variable and initialize to empty array.
iterate each element with for?
  change each element > elem = elem + former element. > append to newy array

Return new array.
*/
/* function runningTotal(array) {
  let totals = [];

  for (let idx = 0; idx < array.length; idx++) {
    if (idx === 0) {
      totals.push(array[0]);
      continue;
    }
    totals.push(array[idx] + totals[totals.length - 1]);
  }

  return totals;
} */

function runningTotal(array) {
  let sum = 0;

  return array.map(elem => sum += elem);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // [] 