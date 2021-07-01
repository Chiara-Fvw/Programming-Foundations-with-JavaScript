/* What Century is That?

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Input: number
output: string

- century begins in 01

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Data structure
Srtrings numbers

Algorithm:

define function takes 1 num argument.
Take the highest of the floating number resulted by dividing by 10
add the suffix
  number to string
  if ends with 1, 2...
  Exceptions: 11, 12, 13

   1 - 100 1st
 101 - 200 2nd
 201 - 300 3rd
1901 - 2000 20th > number / 100


*/
function century(year) {
  let century = Math.ceil(year / 100);
  console.log (stringify(century));
}

function stringify(num) {
  let century = String(num);
  if ((century.endsWith('11')) || (century.endsWith('12')) || (century.endsWith('13'))) {
    return century + 'th';
  } else if (century.endsWith('1')) {
    return century + 'st';
  } else if (century.endsWith('2')) {
    return century + 'nd';
  } else if (century.endsWith('3')) {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"