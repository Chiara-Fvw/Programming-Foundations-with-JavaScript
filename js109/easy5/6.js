/* Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

input: array
string: 3 decimal places

multiply all elemnts
divide by the number of entries
Return the result as a string
Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Data structure
arrays, strings, numbers

Algorithm
declare and initialize variable length to the length of the array.
iterate the array and multiply all elements (save in multiplyResult variable)
divide the multiplication by the length.

The string returned must have 3 decimal places.
 */

function multiplicativeAverage(array) {
  let length = array.length;
  let multiplication = array.reduce((a,b) => a * b);

  let average = (multiplication / length).toFixed(3);

  console.log(average);
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"