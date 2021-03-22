//1. 1h = 60 min total 24:00 h == 00:00
//2. en un dia hay 1440 minutos
// Negativo: 1440 -n / 60= x,y
//                 x = horas
//            y * 60 = minutos

//positivo: hasta 1440 n/60 = x,y
//                        x = horas
//                   y * 60 = minutos

//si numero <= 1440 

//numero / 1440. lo que está despues de la coma por 1440 y otra vez / 60 lo de despues de la coma multiplicado por 60
const MINUTES_DAY = 1440;
const MINUTES_HOUR = 60;

function leadingZero(number) {
  return number < 10 ? `0${number}`: String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_DAY) + MINUTES_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_HOUR);
  let minutes = deltaMinutes % MINUTES_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

//Further Exploration

/* How would you approach this problem if you were allowed to use JavaScript's Date class? 
Suppose you also needed to consider the day of week? (Assume that deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of Thursday 01:29.) */

function timeOfDayWeek(deltaMinutes) {
  
}

console.log(timeOfDayWeek(0)); //=== "00:00"
console.log(timeOfDayWeek(-3)); //=== "23:57"
console.log(timeOfDayWeek(35)); //=== "00:35"
console.log(timeOfDayWeek(-1437)); //=== "00:03"
console.log(timeOfDayWeek(3000)); //=== "02:00"
console.log(timeOfDayWeek(800)); //=== "13:20"
console.log(timeOfDayWeek(-4231)); //=== "Thursday 01:29"