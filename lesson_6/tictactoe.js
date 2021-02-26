//Tic Tac Toe game.

let readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const MATCHES_TO_WIN = 1;

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

const STARTER = 'choose'; // player, computer or choose

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayGameInfo() {
  console.log(`The match will have ${MATCHES_TO_WIN} games.`);
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
}

function displayBoard(board) {
  console.clear();

  displayGameInfo();

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(freeSquares, delimiter = ', ', joinWord = ' or ') {
  let stringForSquares = '';

  if (freeSquares.length === 1) {
    stringForSquares += freeSquares;
  } else if (freeSquares.length === 2) {
    stringForSquares += freeSquares[0] + joinWord + freeSquares[1];
  } else {
    let finalPosition = freeSquares.length - 1;

    for (let idx = 0; idx < freeSquares.length; idx++) {
      if (idx === 0) {
        stringForSquares += freeSquares[idx];
      } else if (idx === finalPosition) {
        stringForSquares += joinWord + freeSquares[idx];
      } else {
        stringForSquares += delimiter + freeSquares[idx];
      }
    }
  }

  return stringForSquares;
}

function playerChooseSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim(); //input trimmed to allow spaces in inputs.
    if (emptySquares(board).includes(square)) break; //break if it is a valid square;

    prompt("Sorry... That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) {
  let markersInLIne = line.map(square => board[square]);

  if (markersInLIne.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);

    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerOffense(board) {
  let square;

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  return square;
}

function computerDefense(board) {
  let square;

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  return square;
}

function computerRandomMove(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  return emptySquares(board)[randomIndex];
}

function computerChoosesSquare(board) {
  let square;

  square = computerOffense(board);

  if (!square) {
    square = computerDefense(board);
  }

  //pick5 or random move
  if (!square) {
    if (emptySquares(board).includes('5')) {
      square = '5';
    } else {
      square = computerRandomMove(board);
    }
  }

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChooseSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'player' ? 'computer' : 'player';
}

function detectRoundWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWonRound(board) {
  return !!detectRoundWinner(board); // !! converts truthy values to true and falsy to false.
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function displayRoundResult(winsOfPlayer, winsOfComputer) {
  prompt(`Player ${winsOfPlayer} / Computer ${winsOfComputer}`);

  let matchWinner = someoneWonMatch(winsOfPlayer, winsOfComputer);
  switch (matchWinner) {
    case 'player':
      prompt('Player is the winner of the match!');
      break;
    case 'computer':
      prompt('Computer is the winner of the match!');
      break;

    default:
      prompt('Press enter to continue.');
      readline.question();
  }
}

function someoneWonMatch(player, computer) {
  if (player === MATCHES_TO_WIN) {
    return 'player';
  } else if (computer === MATCHES_TO_WIN) {
    return 'computer';
  } else {
    return false;
  }
}

function checkAnswer(answer) {
  while ((answer !== 'n') && (answer !== 'y')) {
    prompt(`Please, type "y" for "yes" or "n" for "no".`);
    answer = readline.question().toLowerCase();
  }
}

//game starts
while (true) {
  let winsOfPlayer = 0;
  let winsOfComputer = 0;

  console.clear();
  console.log(`Welcome to the Tic Tac Toe game. To win this match, you will have to win ${MATCHES_TO_WIN} games.`);

  while (!someoneWonMatch(winsOfPlayer, winsOfComputer)) {
    let board = initializeBoard();

    let currentPlayer = STARTER;

    if (currentPlayer === 'choose') {
      prompt('Who will start the game? (computer / player)');
      currentPlayer = readline.question().toLowerCase();

      while ((currentPlayer !== 'computer') && (currentPlayer !== 'player')) {
        prompt('Please, choose between "computer" or "player".');
        currentPlayer = readline.question().toLowerCase();
      }
    }

    while (!someoneWonRound(board) && !boardFull(board)) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
    }

    displayBoard(board);

    if (someoneWonRound(board)) {
      prompt(`${detectRoundWinner(board)} won!`);
      if (detectRoundWinner(board) === 'Player') {
        winsOfPlayer += 1;
      } else {
        winsOfComputer += 1;
      }
    } else {
      prompt("It's a tie!");
    }

    displayRoundResult(winsOfPlayer, winsOfComputer);
  }

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase();
  checkAnswer(answer);

  if (answer === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');