//Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

function isUppercase(string) {
  // let uppercases = string.split('').filter(char => char === char.toUpperCase()).join('');

  // console.log(uppercases.length === string.length); innecesario!!!
  return (string.toUpperCase() === string);
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
