/* Leading Substrings

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.
input: string
output: possible subsstrings with the first letter ordered by length.

? empty strings?
spaces?

Examples:

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

Data structure: strings array

Algorithm:
empty array
loop:
  push a sliced string from idx 0 to 1
  next iteration push from idx 0 to 1 + 1 etc
 */
function leadingSubstrings(string) {
  let substrings = [];

  for (let end = 1; end <= string.length; end++) {
    substrings.push(string.slice(0, end));
  }
  console.log(substrings.sort((a, b) => a.length - b.length));
  return substrings.sort((a, b) => a.length - b.length);
}

// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* Further Exploration

Rewrite leadingSubstrings using list processing functions. That is, convert the string into an array of some sort and use functions like map, filter, or reduce to get the desired substrings. (You will also need to use join.) Try not to use forEach as that is too similar to the for loop approach.

a b c
a, a+b, ab + c

*/
function OtherleadingSubstrings(string) {
  console.log(string.split('').map((_, idx) => string.slice(0, idx + 1)));
}

OtherleadingSubstrings('abc');      // ["a", "ab", "abc"]
OtherleadingSubstrings('a');        // ["a"]
OtherleadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]