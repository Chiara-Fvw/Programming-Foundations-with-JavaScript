/* Convert a String to a Number!

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. 

The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. 

parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true 


Data structure:
Input: string

Intermediate: object.

Output: number


algorithm

- define function with one paramenter (string)
- delcare an object variable where all string representation of digits 0 - 9 are keys and values must be the numeric representation.
- split the string to iterate through each character:
- convert each char to its number (with map)
- declare variable value assign it to 0
- iterate the array again: for each digit multiply the value by 10 and then add teh current char.
- return value.

c
*/
function stringToInteger(string) {

  const DIGITS =  {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

  let arrayOfNums = string.split('').map(char => DIGITS[char]);

  let value = 0;

  arrayOfNums.forEach(char => value = (value * 10) + char);
 
  return value;
}



console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true