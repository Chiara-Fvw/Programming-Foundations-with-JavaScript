/* Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
Input number
Output number

Examples:

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1 

Data structure: 
numbers
strings and array.

Algorithm:
take the number > pass it to string > to array > reverse and join.


*/

function reverseNumber(number) {
  let reversedString = String(number).split('').reverse().join('');
  return (Number(reversedString));
}

console.log(reverseNumber(12345));    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1 

