const LANGUAGE = 'ENG';
const MESSAGES = require('./calculator_messages.json');
// Ask the user the type of operation to perform.
// Perform the operation
// Print the result to the terminal.
const readline = require('readline-sync');

function messages(message, lang = 'ENG') {
  return MESSAGES[lang][message];
}
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("welcome");
let answer;
do {

  prompt("firstN");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("invalidN");
    number1 = readline.question();
  }

  prompt("secondN");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("invalidN");
    number2 = readline.question();
  }

  prompt("operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("verifyOperation");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output} \n`);
  prompt("another");
  answer = readline.question();

} while (answer === 'Yes');