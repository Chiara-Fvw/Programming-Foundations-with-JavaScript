/* Short Long Short

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz" 

PROBLEM:
Input: 2 strings.
Output: concatenation of smaller + bigger +  smaller.

ALGORITHM.
compare length.
declare small;
Declare big.
If x is bigger than y:
 small = y
 big: = x

else 
 small : x
 big: y

console.log(small + big + small);
*/

function shortLongShort(a, b) {
  let small;
  let big;
  if (a.length < b.length) {
    small = a;
    big = b;
  } else {
    small = b;
    big = a;
  }

  return small + big + small;
}

let rlS = require('readline-sync');

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz" 
