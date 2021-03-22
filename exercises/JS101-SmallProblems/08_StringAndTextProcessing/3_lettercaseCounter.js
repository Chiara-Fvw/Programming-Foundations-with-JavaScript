//Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

function letterCaseCount(string) {
  let resultObject = {lowercase: 0, uppercase: 0, neither: 0};
  
  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      resultObject.lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      resultObject.uppercase += 1;
    } else {
      resultObject.neither += 1;
    }
  });
  
  console.log(resultObject);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }


//book solutions

//one

function letterCaseCount1(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;
}

//two

function letterCaseCount2(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

//The second solution uses the String.prototype.match method to process the string argument. The method takes a regular expression pattern as an argument and returns an array of characters that match the pattern. The solution first gets an array of matches for each character type and assigns each array to its respective variable. If the solution does not find any matches, it sets the variable to an empty array ([]) so that an error will not be raised when the length property is accessed on the variable later. Finally, the solution returns an object with three properties, setting the value of each to the length of the corresponding array (i.e., the lowercase property has a value of lowerArray.length).