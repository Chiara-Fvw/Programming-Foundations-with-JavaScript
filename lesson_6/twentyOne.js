let readline = require('readline-sync');

const SUITS = ['H', 'D', 'C', 'S'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

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
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(total) {
  return total > 21; //si es mayor devuelve true.
}

function detectResult(dealerTotal, playerTotal) {
    if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if ( dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

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

function playAgain() {
  console.log('------------');
  prompt('Do you want to play again? (y or n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

//game starts
while (true) {
  console.clear();
  prompt('Welcome to Twenty-one!\n');

  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  //Initial deal
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${dealerCards[0]} and ?`);
  prompt(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.`);

  //Player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt('Sorry, must enter "h"or "s".');
    }

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
    displayResults(dealerTotal, playerTotal);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`You stayed at ${playerTotal}\n`);
  }
  //dealer turn

  prompt('Dealer turn:');
  while (dealerTotal < 17) {
    prompt('Dealer hits!');
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards are now: ${hand(dealerCards)}`);
  }

  if (busted(dealerTotal)) {
    prompt(`Dealer total is now: ${dealerTotal}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${dealerTotal}`);
  }

  //both player and dealer stays - compare cards:
  console.log('===================');
  prompt(`Dealer has ${dealerCards}, for a total of ${dealerTotal}`);
  prompt(`Player has ${playerCards}, for a total of ${playerTotal}`);
  console.log('====================');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}