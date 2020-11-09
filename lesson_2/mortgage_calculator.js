const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number <= 0 ||
  Number.isNaN(number);
}

prompt("Welcome to the mortgage calculator!");
let answer;
do {
  prompt("Please, insert the total loan amount. Use only numbers.");
  let loanAmount = Number(readline.question());
  while (invalidNumber(loanAmount)) {
    prompt("Please, insert a number.");
    loanAmount = Number(readline.question());
  }

  prompt("What is the Anual Percentage Rate? (Write 5 for 5%)");
  let apr = Number(readline.question());
  while (invalidNumber(apr)) {
    prompt("Please, insert a number bigger than 0.");
    apr = Number(readline.question());
  }

  prompt("How long will it take your loan? (Only full years)");
  let loanDurationYears = Number(readline.question());
  while (invalidNumber(loanDurationYears) || !Number.isInteger(loanDurationYears)) {
    prompt("Please, insert a number. An integer number.");
    loanDurationYears = Number(readline.question());
  }

  let loanDurationInMonths = loanDurationYears * 12;
  let monthlyInterestRate = (apr / 12) / 100;
  let monthlyPayment = (loanAmount * 
                      (monthlyInterestRate / 
                      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))))
                      .toFixed(2);

  prompt(`Having a total loan of ${loanAmount.toFixed(2)} to be covered in ${loanDurationYears} years with a ${apr}% APR, you will have to pay $${monthlyPayment} a month.\n`);

  prompt('Would you like to make another estimation?(y or n)');
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please, answer "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'n') {
    prompt('Thank you for using the mortgage calculator. Bye!');
  }

} while (answer === 'y');
