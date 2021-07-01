/* ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.



Problem
Input: string
Output: new string

If empty string: return empty string.
If unique character. Return the char.
Numbers too.
from 1 to x doubles: return only one.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data structure
Strings.
Maybe arrays to iterate?

Algorithm
Define a function that takes 1 argument (string.)
Declare a new variable with an empty string assigned to it.
Iterate the string, split into array.
Iterate the array:
  if the current element is different than the last in new string, keep
  if not, ignore
Return the new string.

C
 */

function crunch(string) {
  return string.split('').filter((char, idx) => char !== string[idx - 1]).join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
