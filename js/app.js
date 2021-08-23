let playerCounter = 0;
let tieCounter = 0;
let computerCounter = 0;

let choices = document.querySelector("#choices");

let buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // TO DO: process user click
    let playerSelection = this.textContent.trim();
    console.log(playerSelection);

    let options = ["Rock", "Paper", "Scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(computerSelection);

    playRound(playerSelection, computerSelection);
    updateResults();
    if (winner()) {
      location.reload();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    tieCounter += 1;
    choices.textContent = "It's a tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerCounter += 1;
    choices.textContent = `You lose ${computerSelection}" beats ${playerSelection}"`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerCounter += 1;
    choices.textContent = `You lose! ${computerSelection} beat ${playerSelection}!`;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerCounter += 1;
    choices.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    playerCounter += 1;
    choices.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  }
}

function updateResults() {
  document.getElementById("playerCounter").textContent = playerCounter;
  document.getElementById("computerCounter").textContent = computerCounter;
  document.getElementById("tieCounter").textContent = tieCounter;
}

function winner() {
  if (playerCounter === 5 && computerCounter < 5) {
    let isWinner = "Player wins! Click OK to play again.";
    alert(isWinner);
    return true;
  } else if (playerCounter < 5 && computerCounter === 5) {
    let isWinner = "Computer wins! Click OK to get revenge.";
    choices = "";
    alert(isWinner);
    return true;
  }
  return false;
}
