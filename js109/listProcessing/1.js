/* Sum Of Digits

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
Input integer
output integer.
-dont use loops
-use methods

Examples:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

Data structure:
intiger, string, arrays

Algotithm:
take the number, pass it to string , passit to array each element to number and then add the numbers
*/

function sum(int) {
  return String(int).split('').map(num => parseInt(num)).reduce((a, b) => a + b);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45