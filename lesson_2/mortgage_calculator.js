const MESSAGES = require('./mortgage_calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number < 0 ||
  Number.isNaN(number);
}

function retrieveInput(type) {
  prompt(MESSAGES[type]["amount"]);
  let input = Number(readline.question());
  while (invalidNumber(input)) {
    prompt(MESSAGES[type]["error"]);
    input = Number(readline.question());
  }
  return input;
}

function calculateMonthlyPayment(loan, apr, years) {
  let loanDurationInMonths = years * 12;
  let monthlyInterestRate = (apr / 12) / 100;  
  if (apr === 0) {
    return Number(loan / loanDurationInMonths).toFixed(2);
  } else {
    let calculation = (loan * 
                      (monthlyInterestRate / 
                      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))))
                      .toFixed(2);
    return calculation;
  }
}

let answer;

function retrieveNewCalAnswer() {
  prompt(MESSAGES["estimation"]);
  answer = readline.question().toLowerCase();
  while (answer !== 'n' && answer !== 'y') {
    prompt(MESSAGES["correctAnswer"]);
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function isNewCal(answer){
  if (answer === 'y'){
    return true;
  } else {
    return false;
  }
}

prompt(MESSAGES["welcome"]);

do {
  let loanAmount = retrieveInput("loan");

  let annualRate = retrieveInput("apr");

  let loanDurationYears = retrieveInput("duration");

  let monthlyPayment = calculateMonthlyPayment(loanAmount, annualRate, loanDurationYears);

  prompt(`Having a total loan of ${loanAmount.toFixed(2)} to be covered in ${loanDurationYears} years with a ${annualRate}% APR, you will have to pay $${monthlyPayment} a month.\n`);

  retrieveNewCalAnswer();

  if (!isNewCal(answer)) prompt(MESSAGES["bye"]);

  if (isNewCal(answer)) console.clear();

} while (isNewCal(answer));
