/* After Midnight (Part 1)

The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.
Disregard Daylight Savings and Standard Time and other complications.

Input: integer (positive or negative) (number of minutes.)
Output string.

Examples:

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
The tests above should log true.

Ds
Integer, strings

Algorithm:
-3 > 23:57
35 > 12:35
800> 13:20 => 800/60(13.33) 
              take 13
              0.3333 * 60 => positive
HOURS_IN_DAYS = 24
    MIN_IN_HOURS = 60
    SEC_IN_HOURS = 60
check if number is positive or negative:
  POSITIVE:
    hours = Integer: mins/60 (13.33) 
    mins = ((mins / 60) - hours) * 60
  NEGATIVE:
    minutes in a day - minutes
    step positvie


if hours > 24?
hours % 24 + former step
    

    return customized string

    if hours > 24
    hours % 24 ...

 */

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOURS = 60;
const MINUTES_IN_DAY = MINUTES_IN_HOURS * HOURS_IN_DAY;

function timeOfDay(deltaMinutes) {
   if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_IN_DAY) + MINUTES_IN_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_IN_DAY;
  }  

  let hours = Math.floor(deltaMinutes / MINUTES_IN_HOURS);
  let minutes = deltaMinutes % MINUTES_IN_HOURS;

  return `${custom(hours, minutes)}`;
}


function custom(hh, mm) {
  if (String(hh).length < 2) hh = '0'+ hh;
  if (String(mm).length < 2) mm = '0'+ mm;
  return `${hh}:${mm}`;
}
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
