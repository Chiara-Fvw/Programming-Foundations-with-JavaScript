/* 
Letter Counter (Part 1)

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
Input: string
Output: object

if empty string: empty object
if special char: count as entire word

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data structure:
Strings, object
array and numbers

Algorithm:
Declare new variable and initialize it to an empty object.
Take the string and split it into an array of words.
iterate the array:
  for each word obtain the length:
    check if the object has this length as key
        y: increment its value by 1
        n: create a key = number and assign the value 1.
  return the object.
 */

function wordSizes(string) {
  let object = {};
  if (!string) return object;

  string.split(' ').forEach(word => {
    let length = String(word.length);
    if (Object.keys(object).includes(length)) {
      object[length] += 1;
    } else {
      object[length] = 1;
    }
  });

  return object;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
