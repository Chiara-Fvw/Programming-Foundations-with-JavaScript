/* Greeting a user

Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.




Example:
What is your name? Bob
Hello Bob.
Copy Code
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING? 


*/

let rlS = require('readline-sync');

let name = rlS.question('What is your name? - ');

if (name.includes('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING? `);
} else {
  console.log(`Hello ${name}.`);
}
