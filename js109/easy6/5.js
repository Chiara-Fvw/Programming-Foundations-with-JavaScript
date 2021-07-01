/* Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Inpunt: number
return negative number.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

Ds: numbers

Algorithm:
take the number
if 
  it is bigger or equal to 0 return it negative.
  it is smaller  return it as it is


*/
function negative(number) {
  return Math.abs(number) * -1;
}

function negativeMe(number) {
console.log(number >= 0 ? -number : number);
 return number >= 0 ? -number : number;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0