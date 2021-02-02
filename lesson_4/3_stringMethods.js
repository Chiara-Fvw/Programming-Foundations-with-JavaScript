// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
What is palindrome? word that reads the same forthward and backwards
Palindrome must be CASE SENSITIVE
Empty strings provides an empty substring.
New object as we are returning substrings.

INPUT string
OUTPUT array of substrings
RULES
  EXPLICIT 
    return all palindromes included in a string as array
    Palindromes are case sensitive

  IMPLICIT
    empty stings provide empty array
    must return a new object.
    I should consider that all inpusts are strings

*/

// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array