function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return ("It's a tie! Both players chose " + playerSelection);
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock";
        } else {
            return "You win! Rock beats scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper";
        } else {
            return "You win! Paper beats rock";
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "You win! Scissors beats paper";
        }
    }
}