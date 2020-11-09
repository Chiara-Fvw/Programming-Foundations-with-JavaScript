const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
  Number(number) <= 0 ||
  Number.isNaN(Number(number));
}

prompt("Welcome to the mortgage calculator!");
let answer;
do {
  prompt("Please, insert the total loan amount.");
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt("Please, insert a number.");
    loanAmount = readline.question();
  }

  prompt("What is the Anual Percentage Rate?");
  let apr = readline.question();
  while (invalidNumber(apr)) {
    prompt("Please, insert a number bigger than 0.");
    apr = readline.question();
  }

  prompt("How long will it take your loan (in years)?");
  let loanDurationYears = readline.question();
  while (invalidNumber(loanDurationYears)) {
    prompt("Please, insert a number.");
    loanDurationYears = readline.question();
  }

  let loanDurationInMonths = loanDurationYears * 12;
  let monthlyInterestRate = (apr / 12) / 100;
  let monthlyPayment = (Number(loanAmount) * 
                      (monthlyInterestRate / 
                      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))))
                      .toFixed(2);

  prompt(`You will have to pay $${monthlyPayment} a month.\n`);

  prompt('Would you like to make another estimation?(y or n)');
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please, answer "y" or "n".');
    answer = readline.question().toLowerCase();
  }

} while (answer === 'y');
