/* Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

Input string
output string


Examples:

swapName('Joe Roberts');    // "Roberts, Joe"


Data structure: strings and arrays
Algorithm:

Take the string, split it into an array of words
return the string with the words reversed and a comma and a space dividing them.

*/
function swapName(string) {  
  return string.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

/* Further Exploration

What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:

*/
function swapName2(string) {
  let name = string.split(' ').slice(0, -1).join(' ');
  let surname = string.split(' ').slice(-1).join('');

  return (`${surname}, ${name}`);
}

console.log(swapName2('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson" 