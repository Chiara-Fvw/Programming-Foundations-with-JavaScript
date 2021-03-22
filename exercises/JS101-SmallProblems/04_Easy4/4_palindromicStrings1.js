// I get a string. As is case sensitive, I just leave it as it is.
// I divide reverse the string. Check if the reversed is the same of the straight. Reverse is an Array method so first I have to make an array.


function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  
  if (string === reversedString) {
    console.log('true');
  } else {
    console.log('false');
  }a

  //book solution: return string === string.split('').reverse().join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
