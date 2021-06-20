/* // Isn't it Odd?

// Problem:
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Input: integer (positive, negative or 0)
Output boolean: true if absolute value is odd.

Data structure:
integers.

Algorithm:
take the absolute value of the integer.
check if it is odd
   yes Return true
  no return false



 */
// Examples:
/* console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true */


function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
