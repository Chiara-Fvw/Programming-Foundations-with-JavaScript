/* Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Input number
Output number


If not double num return number multiplied by 2.
Otherwise number


Examples:


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

Data structure
Numbers strings
Arrays

Algorithm:
number to string
take the length
take the halves.

 compare if halves are strictly equal
ir yes return the number
if not return num * 2.

*/

function twice(num) {
  let string = String(num);
  let middle = string.length / 2;
  let half1 = string.slice(0, middle);
  let half2 = string.slice(middle);
  console.log(half1 === half2 ? num : num * 2);
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676