//Ben was tasked to write a simple JavaScript function to determine whether an input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not familiar with regular expressions. Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  
  if (dotSeparatedWords.length === 4) {
    
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      } 
      return true;
    }

  } 
  
  return 'Invalid input';  
}

//Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

//Help Ben fix his code.

//Helpful code: Here's Alyssa's isAnIpNumber function so you can test your code:

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

//The call to /^\d+$/.test(str) (/\d+$/ is a regular expression) returns a truthy value if str is a string of digits. If it is, we convert it to a number then check whether the number is in the appropriate range (0-255).

//If str is not a string of digits, we return false.

console.log(isDotSeparatedIpAddress('233.45.65.45'));
console.log(isDotSeparatedIpAddress('233.45'));
console.log(isDotSeparatedIpAddress('233.45.65.45.980'));
