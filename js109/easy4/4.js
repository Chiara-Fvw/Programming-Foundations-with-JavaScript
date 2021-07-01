/* Palindromic Strings (Part 1)

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Input string
Output boolean
- case sensitive
- all chars matters

Examples:

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Data structure:
strings.
maybe an array.

Algorithm:

take the string convert to array and reverse
compare string to reversed string
if mathces true 
otherwise false.

 */
function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true