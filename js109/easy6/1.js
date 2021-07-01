/* Double Char (Part 1)

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
Input: string
Output: string

- Case sensitive
- All charachter, including spaces.
Examples:

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // "" 


Data structure: 
strings, arrays.

Algorithm:
define the funciton that takes 1 argument (string)
declare a new varaible and initilize to empty string
loop
  for each char. concatenate 2 times into the new variable.

Return the variable
*/
function repeater(string) {
  let repeatedString = '';

  for (let idx = 0; idx < string.length; idx++) {
    repeatedString += string[idx] + string[idx];
  }

  console.log(repeatedString);
  return repeatedString;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // "" 