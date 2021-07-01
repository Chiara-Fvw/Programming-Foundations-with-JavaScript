/* Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

INPUT: integer (+)
Output: string of 1 and 0

- always starts with 1.

Examples:
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101" 

Data structure
Number, strings.

Algorithm
define function takes 1 argument (positive integer)
declare varaible empty stirng.

for loop :
  - if idx odd > add 1
  - if idx even > add 0.

Return string

C

*/

function stringy(number) {
  let string = '';

  for (let idx = 0; idx < number; idx++) {
    if (idx % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }

  console.log(string);
}

// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101" 

const stringy2 = length => ''.padStart(length, '10');

console.log(stringy2(6));    // "101010"
console.log(stringy2(9));    // "101010101"
console.log(stringy2(1));    // "101010"