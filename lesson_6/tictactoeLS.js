// // Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. 
// Each player takes a turn and marks a square on the board. 
// The first player to get 3 squares in a row–horizontal, vertical, or diagonal–wins. 
// If all 9 squares are filled and neither player has 3 in a row, the game is a tie.

// ****Steps:
// 1. Display the initial empty 3x3 board.
// 2. Ask the user to mark a square.
// 3. Computer marks a square.
// 4. Display the updated board state.
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye!
let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) + 
        `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function playerChooseSquare(board) {
  let square; //declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim(); //input trimmed to allow spaces in inputs.
    if (emptySquares(board).includes(square)) break; //break if it is a valid square;
    
    prompt("Sorry... That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

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

function someoneWon(board){
  return !!detectWinner(board); // !! converts truthy values to true and falsy to false.
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

while (true) {
  let board = initializeBoard();

  while(true) {
    displayBoard(board);

    playerChooseSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');



//MY PEDAC S

//MAIN GAME

// Tic Tac Toe is a 2-player game played on a 3x3 grid called the board. 
// Each player takes a turn and marks a square on the board. 
// The first player to get 3 squares in a row–horizontal, vertical, or diagonal–wins. 
// If all 9 squares are filled and neither player has 3 in a row, the game is a tie.

// ****Steps:
// 1. Display the initial empty 3x3 board.
// 2. Ask the user to mark a square.
// 3. Computer marks a square.
// 4. Display the updated board state.
// 5. If it's a winning board, display the winner.
// 6. If the board is full, display tie.
// 7. If neither player won and the board is not full, go to #2
// 8. Play again?
// 9. If yes, go to #1
// 10. Goodbye!


//JOIN OR FUNCTION
 
//Input: array of numbers, delimeter and connection word
//output: a string including the free squares with the possibility to pass a delimeter and a word.

// Set default parameters in comma and "or". 
// If array no elements > is not a possibility as if there is no free squares the game is over.
// If array only one element > number with no delimiter and no word
//if array only two elements > numbers with no delimiter but using "or"
//else > join items of array with comma and before the last element use word "or"

//KEEP SCORE

//1. Keep track of wins with no global variables.
//2. Report scores after each game.
//3. First players to win 5 games wins the match.
//4. Reset the score to 0 when beginning a new match (global constant no of needed matches to win.)

//Computer AI: Defense
// when the human player has 2 squares in a row with the 3rd square unoccupied., computer will try to defend the 3rd square. 
// If there's no immediate threat, the computer can pick a random square.
//  ** check squares, if set of 2 are occupied, place it in the third
// to check get all player-marked squares