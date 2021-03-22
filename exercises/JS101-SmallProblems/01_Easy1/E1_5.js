let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question('What is the bill?\n'));
let tipRate = parseFloat(rlSync.question('What is the tip percentage?\n'));
let tip = bill * (tipRate / 100);
let total = bill + tip;

console.log(`The tip is $ ${tip.toFixed(2)}`);
console.log(`The total is $ ${total.toFixed(2)}`);

