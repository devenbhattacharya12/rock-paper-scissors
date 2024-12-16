// Step 1: Convert 1, 2, 3 to Rock, Paper, Scissors
function getHumanChoice() {
  const choices = { 1: "rock", 2: "paper", 3: "scissors" };
  const humanchoice = prompt ("What's your choice (1=rock, 2=paper, 3=scissors)?");
  return choices[humanchoice];
}
function convertToChoice(value) {
    const choices = { 1: "rock", 2: "paper", 3: "scissors" };
    return choices[value];
  }

// Step 2: Randomly generate the computer's choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // Random number: 1, 2, or 3
  return convertToChoice(randomNumber);
}

// Step 3: Play a single round
function playRound(userInput) {
  const userChoice = getHumanChoice(); // Convert user input (1, 2, 3) to rock, paper, scissors
  const computerChoice = getComputerChoice(); // Get the computer's random choice

  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // Determine the winner
  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win this round!");
  } else {
    console.log("Computer wins this round!");
  }
}
playRound (getHumanChoice);