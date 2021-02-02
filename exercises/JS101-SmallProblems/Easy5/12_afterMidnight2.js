// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

const MINUTES_DAY = 1440;
const MINUTES_HOUR = 60;


function beforeMidnight(time) {
  let minutes = afterMidnight(time);
  if (minutes === 0) {
    return minutes;
  }
  return MINUTES_DAY - afterMidnight(time);
}

function afterMidnight(time) {
  let hours = parseInt(time.slice(0,2));
  let minutes = parseInt(time.slice(3));
  
  if (hours === 24) {
    hours = 0;
  } 
  
  return (hours * MINUTES_HOUR) + minutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);