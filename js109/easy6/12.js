/* 
Matching Parentheses?

Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input string
output boolean

-true if parenthesis are balanced
-flase otherwise
- to be balanced must occur in matching.
-balanced pairs must each start with a (, not a )
Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
The tests above should log true.

Note that balanced pairs must each start with a (, not a ).

Data structure: 
strings booleans and arrays or object

Algortithm:
declare count initialize to 0.

Iterate the string
if I find an open add 1 if I find close -1

As soon as count goes to -1, return false.

return true.

 */

function isBalanced(string) {
  let parenthesesCount = 0;

  for (let char = 0; char < string.length; char++){
    if (string[char] === '(') {
      parenthesesCount += 1;
    } else if (string[char] === ')') {
      parenthesesCount -= 1;
    } else {
      continue;
    }

    if (parenthesesCount < 0) return false;
  } 

  return parenthesesCount === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

/* Further Exploration

There are a few other characters that should be matching as well. Square brackets and curly brackets normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be balanced. Can you expand this function to take into account those characters? */

