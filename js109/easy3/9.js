/* Clean up the words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Input: string
Output: string (substitute all noon alphabetical char into spaces.)

- Not consecutive spaces: if there are two or more char non-alpha > only 1 space.
- take care of uppercase
Example:

cleanUp("---what's my +*& line?");    // " what s my line "

Data
strings
maypbe array

Algorithm

split the string in array
iterate:
  check if char is alphabet 
  if yes keep
  if no substitute by space
    if precedent char is space, ignore

pass array to string
return new string

 */

function cleanUp(string) {
  let modified = [];

  for (let idx = 0; idx < string.length; idx++) {
    if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(string[idx])) {
      modified.push(string[idx]);
    } else {
      if (modified[modified.length - 1] === ' ') continue;
      
      modified.push(' ');
    }
  }

  return modified.join('');
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "