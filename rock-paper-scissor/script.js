// The console base of rock paper scissors
// const hand = ['rock', 'paper', 'scissor'];
// let humanScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   return hand[Math.floor(Math.random() * 3)];
// }

// function getHumanChoice() {
//   let choice = prompt('rock, paper or scissor');
//   return choice.toLowerCase();
// }

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     return `It's a tie!`;
//   } else if (hand.indexOf(humanChoice) === hand.indexOf(computerChoice) - 1 ||
//              hand.indexOf(humanChoice) === hand.indexOf(computerChoice) + 2) {
//     computerScore++;
//     return `You lose ${computerChoice} beats ${humanChoice}`
//   } else {
//     humanScore++;
//     return `You win ${humanChoice} beats ${computerChoice}`;
//   }
// }

// function playGame() {
//   for (let i = 1; i < 5 + 1; i++) {
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     console.log(`Round: ${i}`);
//     console.log(playRound(humanSelection, computerSelection));
//     console.log(`Score: human ${humanScore} - ${computerScore} computer`);
//     console.log("--------------------------");
    
//   }

//   if (humanScore > computerScore) {
//     return 'You win!';
//   } else if (humanScore < computerScore) {
//     return "You lose!";
//   } else {
//     return `It's a tie!`;
//   }
// }

// playGame();

// And this is a UI base rock paper and scissors

function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  let choiceIndex = Math.floor(Math.random() * 3);
  return choice[choiceIndex]
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
     ) {
      return `You win ${playerChoice} beats ${computerChoice}`;
  }
  return `You lose ${computerChoice} beats ${playerChoice}`;
}

let playerScore = 0;
let computerScore = 0;

const result = document.querySelector('#result');
const winnerMsg = document.querySelector('#winner-message');
const playerScoreEl = document.querySelector('#player-score');
const computerScoreEl = document.querySelector('#computer-score');
const resetBtn = document.querySelector('#reset');
const choicesBtn = document.querySelectorAll('.buttons button');

document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleClick('scissors'));

resetBtn.addEventListener('click', resetGame);

function handleClick(playerChoice) {
  const computerChoice = getComputerChoice();
  let roundResult = playRound(playerChoice, computerChoice);

  result.textContent = roundResult;

  if (roundResult.startsWith('You win')) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (roundResult.startsWith('You lose')) {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }

  if (playerScore === 5) {
    endGame('You won the game!');
  } else if (computerScore === 5) {
    endGame('Computer won the game!');
  }
}

function endGame(message) {
  winnerMsg.textContent = message;

  choicesBtn.forEach(btn => btn.disabled = true);

  resetBtn.classList.remove('hidden');
}

function resetGame() {
  playerScore = 0;
  computerScore = 0
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  result.textContent = '';
  winnerMsg.textContent = '';
  choicesBtn.forEach(btn => btn.disabled = false);
  resetBtn.classList.add('hidden');
}

