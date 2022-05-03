function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase + playerSelection.slice(1).toLowerCase();
    if (playerSelection == computerSelection) {
        return `It's a tie! Both ${computerSelection}`;
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            return `You lose! Paper beats Rock`;
        } else {
            return `You win! Rock beats Scissors`;
        }
    } else if ()
}