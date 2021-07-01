/* Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

Input: string
Output: swapped string

every word contains at least one letter
the string will always contain at least one word. 
each string contains nothing but words and spaces, 
there are no leading, trailing, or repeated spaces.

Examples:

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data structure:
string
array¿

Algorithm:

split the string into word list array
iterate the array:
  - save the first and the last letter into variables
  - concatenate 2nd + middle + first
  - save the word into the array
join the array into a string and return the string.

 */

function swap(string) {
  return string.split(' ').map(word => swapChars(word)).join(' ');
}

function swapChars(word) {
  if (word.length <= 1) return word;
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"