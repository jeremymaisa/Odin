const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const restartBtn = document.querySelector('.restart');
const start = document.querySelector('.start')
const cellContainer = document.querySelector('.cellContainer')
const inputName = document.getElementById('name');
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';
let running = false;
let playerName = '';
let hasStarted = false;
let hasPlayed = false;

cellContainer.classList.remove('active')

playGame();

function playGame() {
  cells.forEach(cell => cell.addEventListener('click', startGame));

  start.addEventListener('click', () => {
    const name = inputName.value.trim();

    if (name === "") {
      alert("Please input a name first");
      return;
    }

    playerName = name;
    hasStarted = true
    cellContainer.classList.add('active');

    beginGame();
  })

  restartBtn.addEventListener('click', resetGame);
  running = true;
}

function beginGame() {
  result.textContent = `"${playerName}" click to play`
  running = true;
}

function startGame() {
  const cellIndex = this.getAttribute("cellAttribute");

  if (options[cellIndex] !== "" || !running) return;

  hasPlayed = true;
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

  if (!hasStarted || !hasPlayed) {
    alert("Play at least one move before restarting");
    return;
  }

  currentPlayer = 'X';
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.textContent = "")
  running = false;
  hasPlayed = false;
  hasStarted = false;
  playerName = '';
  cellContainer.classList.remove('active');
  inputName.value = '';
  result.textContent = ''
}

