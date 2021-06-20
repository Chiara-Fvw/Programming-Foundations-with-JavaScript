/* Odd Lists

Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

Datas tructure:
arrays

Algorithm:
define function with one array parameter.
declare newArray initialize to empty array.
loop with for:
  declare idx initialized to 0
  condition is iterate all the elements of the array
  increment by 2.

  Push the element to the newArray
Return the newArray.
*/

function oddities(array) {
  let newArray = [];

  for (let idx = 0; idx < array.length; idx += 2) {
    newArray.push(array[idx]);
  }

  return newArray;
}



console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

/* 
Take the 2nd, 4th... elemnt
Solve in a different way:
*/

function evens(array) {
  return array.filter(ele => (array.indexOf(ele)) % 2 === 1);
}


console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []