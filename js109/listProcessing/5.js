/* All Substrings

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

Input: string
Output: array of all substrings.
- Ordered by length first the obtain from idx 0, then idx 1 etc.
Example:

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

Data structure: strings, arrays

Algorithm:
iterate the string and on each iteration send to the leading substring function the substring starting from the following idx.


 */

function leadingSubstrings(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
  }

function substrings(string) {
let substrings = [];

for (let start = 0; start < string.length; start++) {
  substrings.push(leadingSubstrings(string.substring(start)));
}

return substrings.flat();
}

console.log(substrings('abcde'));

  // returns
  /* [ "a", "ab", "abc", "abcd", "abcde",
    "b", "bc", "bcd", "bcde",
    "c", "cd", "cde",
    "d", "de",
    "e" ] */