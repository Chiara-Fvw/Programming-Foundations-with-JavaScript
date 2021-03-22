
function randomBetween(min, max) {
  if(min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
}

let teddysAge = randomBetween(20, 120);
console.log(`Teddy is ${teddysAge} years old!`);

function roundBetween(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

teddysAge = roundBetween(20, 120);
console.log(`Teddy is ${teddysAge} years old!`);