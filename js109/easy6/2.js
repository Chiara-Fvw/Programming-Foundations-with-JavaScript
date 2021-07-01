/* Double Char (Part 2)

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
Input string
output string

- not doubleing vowels, digit, puncturation or spaces.


Examples:


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

Data structure
string, array

Algorithm
define the funciton with 1 argument

split the string into an array of char.
iterate the array:
  check if it is not an exception
    double it
    or 
    return it

Return the array joined into a string.

 */

function doubleConsonants(string) {
  console.log(string.split('').map(char => char.match(/[bcdfghjklmnpqrstvwxyz]/i) ? char + char : char).join(''));
  return string.split('').map(char => char.match(/[bcdfghjklmnpqrstvwxyz]/i) ? char + char : char).join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""