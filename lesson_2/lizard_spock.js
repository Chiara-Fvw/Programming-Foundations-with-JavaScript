const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];

let userVictories = 0;
let computerVictories = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function assignWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'Spock')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'Spock')) ||
    (choice === 'Spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return 'you';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

function displayWinner(winner) {
  if (winner === 'you') {
    userVictories += 1;
    prompt(`You win! \n ***You ${userVictories} - computer ${computerVictories}***\n`);
  } else if (winner === 'computer') {
    computerVictories += 1;
    prompt(`Computer wins! \n You ${userVictories} - computer ${computerVictories}`);
  } else {
    prompt('It is a tie! No points this match.');
  }
}

while (true) {
  prompt("The game starts now. The first player winning 5 rounds will be the grand winner")
  while ((userVictories < 5) && (computerVictories < 5)) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}. Use:\n s > scissors \n p > paper\n r > rock\n l > lizard\n S > Spock\n`);
    let letter = readline.question();
    let choice = VALID_CHOICES.find(element => element[0] === letter);

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice...");
      let letter2 = readline.question(); //problema eslint porque habia puesto la variable x eso cambio el nombre.
      choice = VALID_CHOICES.find(element => element[0] === letter2);
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    let matchResult = assignWinner(choice, computerChoice);
    displayWinner(matchResult);
  }

  if (userVictories > computerVictories) {
    prompt('GAME OVER.\n YOU ARE THE GRAND WINNER!');
  } else {
    prompt('GAME OVER.\n COMPUTER IS THE GRAND WINNER!');
  }
  userVictories = 0;
  computerVictories = 0;

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please, enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  console.clear();
  if (answer[0] !== 'y') break; 
}
