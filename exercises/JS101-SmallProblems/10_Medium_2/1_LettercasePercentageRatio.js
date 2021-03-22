// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

function letterPercentages(string) {
  let count = string.length;

  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2)
  };
}

//solution 2

function letterPercentages2(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


//hint: This exercise is a string processing problem. You can either convert the string into an array and use list processing (iteration perhaps?) to gather and tally the characters, or use regex to get the characters that match a particular pattern. Once you have the characters, you can simply get the quantity for each category, divide the quantity by the length of the string, and format the result as needed.

// my solution

function calculatePercentages(letters, string) {
  if (letters === null) {
    return "0.00";
  } else {
    return ((letters.length / string.length) * 100).toFixed(2);
  }
} 

function letterPercentagesMINE(string) {
  let percentages = {lowercase: "0", uppercase: "0", neither: "0"};
  let lower = string.match(/[a-z]/g);
  let upper = string.match(/[A-Z]/g);
  let neitherCases = string.match(/[^a-zA-Z]/g);

  percentages.lowercase = calculatePercentages(lower, string);
  percentages.uppercase = calculatePercentages(upper, string);
  percentages.neither = calculatePercentages(neitherCases, string);

  console.log(percentages);
}
