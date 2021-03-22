//Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

function removeVowels(array) {
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let stringsWithoutVowels = [];

array.forEach(string => {
  stringsWithoutVowels.push(string.split('').filter(char => !VOWELS.includes(char)).join(''));
});

return stringsWithoutVowels;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

///BOOK SOLUTION

function removeVowels1(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

//  BOOK SOLUTION 2

function removeVowels2(stringArray) {
  return stringArray.map(string => {
    let chars = string.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
}

function deleteVowels(array) {
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char; 
    }
  });
}