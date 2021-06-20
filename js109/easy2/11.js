/* Convert a Number to a String!

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples:

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

algorithm

array of strings.
Use the index to iterate.

take the number:
remainder of dividing by 10.
subtract the unit and continue until number >= 0.

Each reminder concatenate by index to emtpy string.

 */
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    console.log(remainder);
    number = Math.floor(number / 10);
    console.log(number);
    result = DIGITS[remainder] + result;
    console.log(result);
  } while (number > 0);

  return result;
}


console.log(integerToString(4321));        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"