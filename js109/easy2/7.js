/* Exclusive Or

The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. 
The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. 

This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, 
returns true if exactly one of its arguments is truthy, false otherwise. 

Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

Examples:

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

Data structure:
numbers, strings, booleans.

Algorithm:
define function takes two arguments.
convert each parameter into its relative boolean.

if one is equal to two
  return false

otherwise:
  return true
*/
function xor(one, two) {
  return Boolean(one) === Boolean(two) ? false : true;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);