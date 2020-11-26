// Multiples of 3 and 5

// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. 
//For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
// You may assume that the number passed in is an integer greater than 1.

//solicitar x al usuario.
//crear un array o algo con todos los números que vayan de 1 a x.
//tengo que recorrer el array seleccionando los números que sean multiples de 3 o de 5.
//coger toos los números seleccionados y sumarlos entre ellos.

let rlSync = require('readline-sync');
let limitNumber = parseFloat(rlSync.question('Please, enter an integer greater than 0: \n'));

function multisum(limitNumber) {
  let sum = 0;
  for (let count = 1; count <= limitNumber; count ++) {
    if ((count % 3 !== 0) && (count % 5 !== 0)) {
      continue;
    }  
    sum += count;
  } 
  return sum;
}

console.log(multisum(limitNumber));       
// 3==> 3
// 5==> 8
//10==> 33
// 1000==> 234168