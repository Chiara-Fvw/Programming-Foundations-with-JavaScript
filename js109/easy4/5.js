/* Palindromic Strings (Part 2)

Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Examples:
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false


define isRealPalindrome  
convert string to array
take out the non alpha numeric charts
reverse
join
compare with the function
 */

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

function isRealPalindrome(string) {

  let polishedString = string.split('').filter(char => char.match(/[a-z0-9]/i)).join('').toLowerCase();
  return isPalindrome(polishedString);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false