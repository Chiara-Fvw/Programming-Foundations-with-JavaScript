//Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

//You may (and should) use the substrings function you wrote in the previous exercise.

//For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

function leadingSubstrings(string) {
  let substrings = [];

  for (let idx = 1; idx <= string.length; idx++) {
    substrings.push(string.slice(0, idx));
  }

  return(substrings);
}

function substrings(string) {
  let allSubstrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    allSubstrings.push(leadingSubstrings(string.slice(idx)));
  }

  return(allSubstrings.flat());
}

function palindromes(string) {
  console.log(substrings(string).filter(substring => substring.length > 1 && 
                                        substring === substring.split('').reverse().join('')));
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]