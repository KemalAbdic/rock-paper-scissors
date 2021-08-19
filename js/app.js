let playerCounter = 0;
let tieCounter = 0;
let computerCounter = 0;

let buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // TO DO: process user click
    let playerSelection = this.textContent;
    console.log(playerSelection);

    let options = ["Rock", "Paper", "Scissors"];
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    console.log(computerSelection);

    playRound(playerSelection, computerSelection);
    updateResults();
    if (winner()) {
      playerCounter = 0;
      computerCounter = 0;
      tieCounter = 0;
      updateResults();
    }
  });
});

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection === computerSelection) {
    tieCounter += 1;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerCounter += 1;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerCounter += 1;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerCounter += 1;
  } else {
    playerCounter += 1;
  }
}

function updateResults() {
  document.getElementById("playerCounter").textContent = playerCounter;
  document.getElementById("computerCounter").textContent = computerCounter;
  document.getElementById("tieCounter").textContent = tieCounter;
}

function winner() {
  if (playerCounter === 5 && computerCounter < 5) {
    let isWinner = "Player wins";
    alert(isWinner);
    return true;
  } else if (playerCounter < 5 && computerCounter === 5) {
    let isWinner = "Computer wins";
    alert(isWinner);
    return true;
  }
  return false;
}
