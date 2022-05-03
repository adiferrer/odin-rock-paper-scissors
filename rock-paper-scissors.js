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

function game() {
    let userInput, compInput;
    let userScore = 0, compScore = 0, resultPrompt = "";
    for (let i = 0; i < 5; i++) {
        userInput = prompt("Enter your choice: ");
        compInput = computerPlay();
        resultPrompt = playRound(userInput, compInput);
        console.log(resultPrompt);
        if (resultPrompt.search("win") >= 0) {
            userScore += 1;
        } else if (resultPrompt.search("lose") >= 0) {
            compScore += 1;
        }
    }

    console.log(`User Score: ${userScore}\nComp Score: ${compScore}`); 
    if (userScore > compScore) {
        alert("Congratulations! You win the game!");
    } else if (userScore < compScore) {
        alert("Awwww! Better luck next time.");
    } else {
        alert("It's a tie!");
    }
}