const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
      prompt("You win!");
    } else if ((choice === 'rock' && computerChoice === 'paper') ||
              (choice === 'paper' && computerChoice === 'scissors') ||
              (choice === 'scissors' && computerChoice === 'rock')) {
      prompt("Computer wins!");
    } else {
      prompt("It's a tie!");
    }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice...");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt("Please, enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  
  if (answer[0] !== 'y') break; 
}


/*
Things to consider

Notice how the displayWinner function calls the prompt function. What happens if you move the displayWinner function definition above the prompt function definition? Does it still work? 
> YES

How would you use the displayWinner function differently if it returned a string, as opposed to outputting the string directly?
> console.log(displayWinner(choice, computerChoice));

We used the Math object to generate a random number and round down a floating point number. Skim through the documentation for the Math object and see what other methods from the object you may find useful. Specifically, read the pages for Math.round and Math.ceil. How would you rewrite the random index expression if you were to use one of these two methods instead of Math.floor?

> Math.ceil((Math.random() * VALID_CHOICES.length)) - 1;

> Math.round(Math.random() * (VALID_CHOICES.length - 1));

We used a while loop with an always-true condition and a break statement to decide whether to replay the game. Can you rewrite the loop so that we don't need to use the break statement to stop the loop?

if (answer[0] !== 'y') {
  return false;
};
*/

