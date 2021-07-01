/* Reverse It (Part 2)

Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Input string
output string

Examples:

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

data structure: strings and arrays

algorithm:
take the string and split it into an array of words.

Iterate each word and reverse the letters of each word.
 */
function reverseWords(string) {
  let arrayOfWords = string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word);
  console.log(arrayOfWords);
  return arrayOfWords.join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"