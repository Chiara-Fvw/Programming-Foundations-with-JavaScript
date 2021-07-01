/* Reverse It (Part 1)

Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.
Input string
output string

Examples:

Copy Code
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

Data structure:
strings and arrays 

Algorithm
take the string: split it into an array of words reverse the order and join.

 */
function reverseSentence(string) {
  console.log(string.split(' ').reverse().join(' '));
  return string.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"