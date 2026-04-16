const hand = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return hand[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt('rock, paper or scissor');
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `It's a tie!`;
  } else if (hand.indexOf(humanChoice) === hand.indexOf(computerChoice) - 1 ||
             hand.indexOf(humanChoice) === hand.indexOf(computerChoice) + 2) {
    computerScore++;
    return `You lose ${computerChoice} beats ${humanChoice}`
  } else {
    humanScore++;
    return `You win ${humanChoice} beats ${computerChoice}`;
  }
}

function playGame() {
  for (let i = 1; i < 5 + 1; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(`Round: ${i}`);
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Score: human ${humanScore} - ${computerScore} computer`);
    console.log("--------------------------");
    
  }

  if (humanScore > computerScore) {
    return 'You win!';
  } else if (humanScore < computerScore) {
    return "You lose!";
  } else {
    return `It's a tie!`;
  }
}

playGame();