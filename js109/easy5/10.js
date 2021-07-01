/* Array Average

Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
input: array
output: number rounded down
Examples:
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

data structure: arrays & numbers

Algorithm
take the length of hte array
multiply all the elements of the array
divide multiplication by length
Return the smaller integer.
*/
/* function average(array) {
  let length = array.length;

  let multiplication = array.reduce((a, b) => a + b);
  console.log(Math.floor(multiplication / length));
  return Math.floor(multiplication / length);
} */

function average(array) {
  let sum = 0;
  array.forEach(num => sum += num);

  console.log(Math.floor(sum / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
