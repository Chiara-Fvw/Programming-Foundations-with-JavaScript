//Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

function negative(number) {
  console.log(Math.abs(number) * -1);
}

function ternaryNegative(number) {
  console.log(number < 0 ? number : (number * -1));
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

ternaryNegative(5);
ternaryNegative(-3);
ternaryNegative(0);

//differentiate negative zero

//Using ES6, you can use the helper method Object.is(), which differentiates between +0 and -0:

console.log(+0 === -0) // true
console.log(Object.is(+0,-0)) // false

// In JavaScript, +0 is equal to -0
console.log(+0 === -0) // true

// Division by +0 produces +Infinity:
console.log(1/+0) // Infinity
console.log(1/+0 === +Infinity) // true

// Division by -0 produces -Infinity:
console.log(1/-0) // -Infinity
console.log(1/-0 === -Infinity) // true

// To compare +0 and -0, divide by each value and compare the result:
var positiveZero = +0
var negativeZero = -0
console.log(positiveZero === negativeZero) // true
console.log(1/positiveZero === 1/negativeZero) // false