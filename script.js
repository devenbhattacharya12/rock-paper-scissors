// Possible choices
const choices = ['rock', 'paper', 'scissors'];

// Scores
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// Function to get a random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner of a single round
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return "You win this round!";
  }
  computerScore++;
  return "You lose this round!";
}

// Function to update the score display
function updateScores() {
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

// Function to check for a game winner
function checkGameWinner() {
  if (playerScore === winningScore) {
    document.getElementById('winner-announcement').textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === winningScore) {
    document.getElementById('winner-announcement').textContent = "Game over! The computer won the game.";
    disableButtons();
  }
}

// Function to disable buttons after the game is over
function disableButtons() {
  document.querySelectorAll('button').forEach(button => {
    button.disabled = true;
  });
}

// Event listener function for a button click
function playRound(event) {
  const playerChoice = event.target.id; // Get the player's choice (button ID)
  const computerChoice = getComputerChoice(); // Get the computer's choice
  const result = determineWinner(playerChoice, computerChoice); // Determine the result

  // Update the result and scores
  document.getElementById('result').textContent =
    `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  updateScores();
  checkGameWinner();
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', playRound);
document.getElementById('paper').addEventListener('click', playRound);
document.getElementById('scissors').addEventListener('click', playRound);
