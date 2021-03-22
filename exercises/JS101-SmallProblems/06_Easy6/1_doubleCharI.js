//Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

function repeater(string) {
  let newString = '';

  for (let idx = 0; idx < string.length; idx++) {
    newString += string[idx] + string[idx];
  }

  console.log(newString);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""