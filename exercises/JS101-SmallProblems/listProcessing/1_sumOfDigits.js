//Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

function sum(integer) {
  console.log(integer.toString().split('').map(element => Number(element)).reduce((acc, val) => acc + val, 0));
}

//I can save 1 step insted of map to convert in number, just .reduce((acc, val) => acc + Number(val), 0);

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
