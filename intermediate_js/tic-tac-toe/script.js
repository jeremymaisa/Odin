const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const restartBtn = document.querySelector('.restart');
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [3, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let running = false;

playGame();

function playGame() {
  cells.forEach(cell => cell.addEventListener('click', startGame));

  restartBtn.addEventListener('click', resetGame);
  result.textContent = `click to play`;
  running = true;
}

function startGame() {
  const cellIndex = this.getAttribute("cellAttribute");

  if (options[cellIndex] !== "" || !running) return;
  updateCell(this, cellIndex);
  playerWin()

}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer
}

function changePLayer() {
  currentPlayer = (currentPlayer === 'X') ? "O" : "X";
   result.textContent = `${currentPlayer}'s turn`;
}

function playerWin() {
  let round = false;

  for (let i = 0; i < winCondition.length; i++) {
    const condition = winCondition[i];

    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA === "" || cellB === "" || cellC === "") {
      continue;
    }

    if (cellA === cellB && cellB === cellC) {
      round = true;
      break;
    }
  }

  if (round) {
    result.textContent = `${currentPlayer}'s win`;
    running = false
  } else if(!options.includes("")) {
    result.textContent = 'Draw!';
    running = false
  } else {
    changePLayer();
  }
}

function resetGame() {
 currentPlayer = 'X';
 options = ["", "", "", "", "", "", "", "", ""];
 result.textContent = `click to play`;
 cells.forEach(cell => cell.textContent = "")
 running = true
}