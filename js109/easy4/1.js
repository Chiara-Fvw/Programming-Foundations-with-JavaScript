/* How old is Teddy?

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example Output:

Teddy is 69 years old!

Data structure
Numbers strings

Algorightm


C

 */
function calculateTeddyAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let age = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${age} years old!`);
}

calculateTeddyAge(20, 120);