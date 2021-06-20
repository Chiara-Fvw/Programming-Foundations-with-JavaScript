/* The End Is Near But Not Here

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.


Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
Data structure:

string array.

Algorithm:

define function takes 1 arg.
take the string convert to array of words. (with ' ');
return the penultimate element.

 */
function penultimate(string) {
  let list = string.split(' ');
  return list[list.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* Further Exploration

Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: 

strings that contain just one word, 
strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

input: sentence.
output: middle word.

Edge cases:
Empty strings. > return an empty string.
Strings with one word. > return the one word.
Strings with even number of words. > return the two middle words.

Examples:

console.log(middleWord('Hello my friend!')) //> 'my'
console.log(middleWord('Hello my bautiful friend!')) //> 'my beautyful'
console.log(middleWord('')) //> ''
Data structure:
strings and arrays.

Algorithm:

Define a function that takes one string argument.
Convert the string into an array.
declare variable for middle number of the length.

Check if array's length is even or odd or empty.
  odd > return the element in the middle idx.
    length / 2  lower integer returned.

  even > return the 2 elements in the middle idx.
    length / 2 > element - 1 + element 
  empty > return an empty string.

 */

function middleWord(string) {
  let listOfWords = string.split(' ');
  let middle = Math.floor(listOfWords.length / 2);

  if(listOfWords.length % 2 !== 0){
    return listOfWords[middle];
  } else if (listOfWords.length % 2 === 0) {
    return listOfWords[middle - 1] + ' ' + listOfWords[middle];
  } else{
    return '';
  } 
}

console.log(middleWord('Hello my friend!')) //> 'my'
console.log(middleWord('Hello my beautiful friend!')) //> 'my beautyful'
console.log(middleWord('')) //> ''