/* Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

PROBLEM:
Input: number (integer greater than 1)
output: sum of all numbers between 1 and n that are also multiples of 5 or 3.

Data structure:
numbers.
Array.

ALGORITHGM
 
declare array to emtpy array.
loop until the given n. and append all numbers to array.
Filter the array checking for multiples of 3 and 5.
On the returned array call reduce to perform the sum of all of its digits.


 */

function multisum(num) {
  let array = [];

  for (let nx = 1; nx <= num; nx++) {
    array.push(nx);
  }

  return array.filter(elem => (elem % 3 === 0) || (elem % 5 === 0)).reduce((a, b) => a + b);
}




console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168