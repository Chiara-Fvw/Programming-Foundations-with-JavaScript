/* Letter Counter (Part 2)

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

Data structure: string, arrays and objects.

Algorithm:

Use the former function.
pass to map the array of words cleaned by depureWords:
  before start the count exclude all non letters. 
  filter to return a string with no non-letter cahrs.

*/

function wordSizes(string) {
  let object = {};
  if (!string) return object;

  string.split(' ').forEach(word => {
    word = word.split('').filter(char => char.match(/[a-z]/i)).join('');
    let length = String(word.length);
    if (Object.keys(object).includes(length)) {
      object[length] += 1;
    } else {
      object[length] = 1;
    }
  });

  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}