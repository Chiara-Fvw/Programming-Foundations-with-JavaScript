/* After Midnight (Part 2)

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples:

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0); 

input: time of day in string
output: minures in number

Algorithm:
Declare constants for minutes in hours.
define afterMidninght
take the minutes 34
Add the ours multiplied mins in hours.
mins += 12*60
return sum of minutes.

Define before midnight

12:34
(24 - 13)*60 + (60 - 34)

24 - 13 = 11


before to after: 
if mins > 0
  hour + 1.
  60 - mins

  12:34 > 11:26 > 686

  else hour

  return aftermidnight(xx:xx)
*/

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function afterMidnight(clockTime) {
  let clockMinutes = Number(clockTime.split(':')[1]);
  let clockHours = Number(clockTime.split(':')[0]);

  let minutes = ((clockHours * MINUTES_IN_HOUR) + clockMinutes) % MINUTES_IN_DAY;

  return minutes;
}

function beforeMidnight(clockTime) {
  let minutes = MINUTES_IN_DAY - afterMidnight(clockTime);
  if (minutes === MINUTES_IN_DAY) {
    minutes = 0;
  }
  return minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0); 