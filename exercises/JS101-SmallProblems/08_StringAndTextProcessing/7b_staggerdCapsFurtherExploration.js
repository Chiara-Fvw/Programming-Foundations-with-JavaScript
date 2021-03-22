// Further Exploration

// Modify this function so the caller can determine whether non-alphabetic characters should be counted when determining the upper/lowercase state. That is, you want a function that can perform the same actions that this function does, or that operates like the previous version.

// Hint: Use a default parameter.

function staggeredCase(string, inclusion = 'no') {
  if (inclusion === 'include') {
    return string.split('').map((char, idx) => {
      if (idx % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
  } else {
    let needUpper = true;
    return string
      .split('')
      .map(char => {
        char = char.toLowerCase();
        if (char >= 'a' && char <= 'z') {
          if (needUpper) {
            needUpper = false;
            return char.toUpperCase();
          } else {
            needUpper = true;
            return char.toLowerCase();
          }
        } else {
          return char;
        }
      })
      .join('');
    }
} 


console.log(staggeredCase('I Love Launch School!', 'include'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"