let readline = require('readline-sync');

const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const ROUNDS_TO_WIN = 2;
const TOP_SCORE = 21;
const DEALER_STAY_SCORE = 17;

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); //0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; //swap elements
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}

function displayCards(cards) {
  let cardsToDisplay = cards[1] + ' of ' + cards[0];
  return cardsToDisplay;
}

function total(cards) {
  let values = cards.map(card => card[1]);
  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  //Aces correction
  values.filter(value => value === 'A').forEach(_ => {
    if (sum > TOP_SCORE) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > TOP_SCORE; //si es mayor devuelve true.
}

function detectRoundResult(dealerTotal, playerTotal) {
  if (playerTotal > TOP_SCORE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > TOP_SCORE) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if ( dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayRoundResults(dealerTotal, playerTotal) {
  let result = detectRoundResult(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function checkAnswer(answer) {
  if (["h", "s"].includes(answer)) {
    return answer;
  } else {
    prompt('Sorry, must enter "h"or "s".');
  }
  return answer;
}

function playAgain() {
  console.log('------------');
  prompt('Do you want to play again? (y or n)');

  let answer = readline.question();

  while ((answer !== 'n') && (answer !== 'y')) {
    prompt(`Please, type "y" for "yes" or "n" for "no".`);
    answer = readline.question().toLowerCase();
  }

  return answer === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]} of ${card[0]}`).join(', ');
}

function CardsComparation(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log('===================');
    prompt(`Dealer has ${hand(dealerCards)}, for a total of ${dealerTotal}`);
    prompt(`Player has ${hand(playerCards)}, for a total of ${playerTotal}`);
    console.log('====================');
}

function someWinsMatch(dealerWins, playerWins) {
  if (playerWins === ROUNDS_TO_WIN) {
    return 'player';
  } else if (dealerWins === ROUNDS_TO_WIN) {
    return 'dealer';
  } else {
    return false;
  }
}

function displayMatchScores(dealerWins, playerWins) {
  console.log(`End of Round! Dealer ${dealerWins} Player ${playerWins}`);
  let matchWinner = someWinsMatch(dealerWins, playerWins);
  switch (matchWinner) {
    case 'player':
      prompt('Player is the winner of the match!');
      break;
    case 'dealer':
      prompt('Dealer is the winner of the match!');
      break;

    default:
      prompt('Press enter to continue.');
      readline.question();
      console.clear();
  }
}

//GAME STARTS

while (true) {
  let dealerWins = 0;
  let playerWins = 0;

  console.clear();
  prompt('Welcome to Twenty-one!\n');
  prompt(`The first winning ${ROUNDS_TO_WIN} rounds will be the match grand winner. Good Luck! \n`);

  while (!someWinsMatch(dealerWins, playerWins)) {  //MAIN GAME LOOP

    prompt('New round starts now!');
    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    //Initial deal
    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));

    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    prompt(`Dealer has ${displayCards(dealerCards[0])} and ?`);
    prompt(`You have: ${displayCards(playerCards[0])} and ${displayCards(playerCards[1])}, for a total of ${playerTotal}.`);

    //Player turn
    while (true) {
      let playerTurn;
      do {
        prompt('Would you like to (h)it or (s)tay?');
        let answer = readline.question().toLowerCase();
        playerTurn = checkAnswer(answer);
      } while (!['h', 's'].includes(playerTurn));

      if (playerTurn === 'h') {
        playerCards.push(deck.pop());
        playerTotal = total(playerCards);
        prompt('You chose to hit!');
        prompt(`Now your cards are: ${hand(playerCards)}`);
        prompt(`Your total is now: ${playerTotal}`);
      }

      if (playerTurn === 's' || busted(playerTotal)) break;
    }

    if (busted(playerTotal)) {
      displayRoundResults(dealerTotal, playerTotal);
      dealerWins += 1;
      displayMatchScores(dealerWins, playerWins);
      continue;
    } else {
      prompt(`You stayed at ${playerTotal}\n`);
    }
    //dealer turn

    prompt('Dealer turn:');
    while (dealerTotal < DEALER_STAY_SCORE) {
      prompt('Dealer hits!');
      dealerCards.push(deck.pop());
      dealerTotal = total(dealerCards);
      prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
    }

    if (busted(dealerTotal)) {
      prompt(`Dealer total is now: ${dealerTotal}`);
      displayRoundResults(dealerTotal, playerTotal);
      playerWins += 1;
      displayMatchScores(dealerWins, playerWins);
      continue;
    } else {
      prompt(`Dealer stays at ${dealerTotal}`);
    }

    //both player and dealer stays - compare cards:
    CardsComparation(dealerCards, playerCards, dealerTotal, playerTotal);

    if (detectRoundResult(dealerTotal, playerTotal) === 'DEALER') {
      dealerWins += 1;
    } else if (detectRoundResult(dealerTotal, playerTotal) === 'PLAYER') {
      playerWins += 1;
    }

    displayRoundResults(dealerTotal, playerTotal);

    displayMatchScores(dealerWins, playerWins);

  }

  if (!playAgain()) break;
}

console.log('Thanks for playing with me! Bye bye!');
