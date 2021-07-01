/* Palindromic Numbers

Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Examples:

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Data structure:
numbers, string, arrays

Algorithgm:
declare the function taking 1 number argument.
pass into string, then to array
reverse the elements of hte array, join into string and again to number.

compare both numbers 
  if strictly equal true
  otherwise false

 */

function isPalindromicNumber(number) {
  return number === Number(String(number).split('').reverse().join(''));
}

  console.log(isPalindromicNumber(34543));        // true
  console.log(isPalindromicNumber(123210));       // false
  console.log(isPalindromicNumber(22));           // true
  console.log(isPalindromicNumber(5));            // true

  /* Further Exploration: Suppose the number argument begins with one or more 0s. Will the solution still work? Why or why not? Is there any way to address this? */