//Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === '(') {
      parens += 1;
    } else if (string[idx] === ')') {
      parens -= 1;
    }
    if (parens < 0) return false;
  }

  return parens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);