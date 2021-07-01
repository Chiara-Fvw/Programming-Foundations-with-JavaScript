/* Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

input: floating num
output: string
degrees, minutes, seconds

60" === 1'
60' = 1º


Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

Data structure:
strings, numbers

Algorithm:
Take the floating number
decompose it into 
deg = integer before decimal
min =  dec * 60 > the integer before decimal
sec =  dec * 60 > the int before decimal.

return the string

 */
function dms(num) {
  let degrees = Math.floor(num);
  let minutes = Math.floor((num % 1) * 60);
  let seconds = Math.floor((((num % 1) * 60) % 1) * 60);

  console.log(`${degrees}°${custom(minutes)}'${custom(seconds)}"`);
}

function custom(num) {
  return String(num).length < 2 ? '0' + num : num;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"