/* Get The Middle Character

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

input string
output string
- return the middle character or characters when leght is even.
Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

Data structure.
STRINGs
array

Algorighm:
define the function that takes 1 argument (string)
take the length of the string.
6 subtract 1 check if it is odd
no divide by 2 (floor) and take this char + 1.
yes divide by 2 (floor) and take this char.

return it
*/
function centerOf(string) {
  let length = string.length;
  let half = Math.floor(length / 2);
  return length % 2 !== 0 ? string.slice(half, half + 1) : string.slice(half - 1, half + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"