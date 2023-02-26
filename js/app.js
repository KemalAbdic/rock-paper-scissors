const game = {
  playerCounter: 0,
  tieCounter: 0,
  computerCounter: 0,
  choicesElement: document.querySelector("#choices"),
  playerCounterElement: document.getElementById("playerCounter"),
  computerCounterElement: document.getElementById("computerCounter"),
  tieCounterElement: document.getElementById("tieCounter"),

  playRound(playerSelection) {
    const options = ["Rock", "Paper", "Scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    if (playerSelection === computerSelection) {
      this.tieCounter++;
      this.choicesElement.textContent = "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
      this.computerCounter++;
      this.choicesElement.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
      this.computerCounter++;
      this.choicesElement.textContent = `You lose! ${computerSelection} beat ${playerSelection}!`;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      this.computerCounter++;
      this.choicesElement.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      this.playerCounter++;
      this.choicesElement.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    }
  },

  updateResults() {
    const { playerCounter, computerCounter, tieCounter } = this;
    this.playerCounterElement.textContent = playerCounter;
    this.computerCounterElement.textContent = computerCounter;
    this.tieCounterElement.textContent = tieCounter;
  },

  winner() {
    const { playerCounter, computerCounter } = this;
    if (playerCounter === 5 && computerCounter < 5) {
      const isWinner = "Player wins! Click OK to play again.";
      alert(isWinner);
      return true;
    } else if (playerCounter < 5 && computerCounter === 5) {
      const isWinner = "Computer wins! Click OK to get revenge.";
      this.choicesElement.textContent = "";
      alert(isWinner);
      return true;
    }
    return false;
  },

  resetGame() {
    this.playerCounter = 0;
    this.tieCounter = 0;
    this.computerCounter = 0;
    this.updateResults();
    this.choicesElement.textContent = "";
  },
};

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.textContent.trim();

    game.playRound(playerSelection);
    game.updateResults();
    if (game.winner()) {
      game.resetGame();
    }
  });
});