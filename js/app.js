function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

let playerCounter = 0;
let tieCounter = 0;
let computerCounter = 0;

function winner(){
  if (playerCounter < computerCounter) {
    alert("Computer won!")
  } else if (playerCounter > computerCounter){
    alert("Player won!")
  } else {
    alert("It's a tie!")
  }
}
function playRound(playerSelection, computerSelection) {
  console.log(computerSelection);
  // your code here!
  if (playerSelection == computerSelection) {
    alert("It's a tie!");
    tieCounter += 1;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You lose! Paper beats rock.");
    computerCounter += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("You lose! Scissors beat paper.");
    computerCounter += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("You lose! Rock beats scissors.");
    computerCounter += 1;
  } else {
    alert("You win!");
    playerCounter += 1;
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log("it's the " + i + " round");
    const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerCounter);
    console.log(tieCounter);
    console.log(computerCounter);
    alert("Current result is: " + "Player: " + playerCounter + " Computer: " + computerCounter + " Tie:" + tieCounter);
  }
  winner();
}

game();
