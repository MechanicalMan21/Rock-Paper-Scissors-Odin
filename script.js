const rounds = 5;

const getComputerChoice = () => {
    let result = Math.random();
    if (result >= (2/3)) {
        return "rock";
    }
    else if (result >= (1/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
};

const getHumanChoice = () => {
    return prompt("Enter rock,paper, or scissors"); 
};


// Bigger functions

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Your Score: " + humanScore);
    console.log("CPU Score: " + computerScore);

    if (humanScore < computerScore) {
        // Player loses
        console.log("You lost! Play again?");
    }
    else if (humanScore > computerScore) {
        console.log("Congratulations! You Won! Play again?");
    }
    else {
        console.log("Tie! Play again?");
    }

    function playRound(humanChoice, cpuChoice) {
    let formattedChoice = humanChoice.toLowerCase();
        // User Chooses Rock
    if (formattedChoice == "rock" && cpuChoice == "rock") {
        console.log("Tie!");
    } 
    else if(formattedChoice == "rock" && cpuChoice == "paper") {
        console.log("You Lost! Rock loses to Paper");
        computerScore++;
    }
    else if(formattedChoice == "rock" && cpuChoice == "scissors") {
        console.log("You Won! Rock beats Scissors!");
        humanScore++;
    }   // User chooses Paper
    else if(formattedChoice == "paper" && cpuChoice == "rock") {
        console.log("You Won! Paper beats Rock!");
        humanScore++;
    }
    else if(formattedChoice == "paper" && cpuChoice == "scissors") {
        console.log("You Lost! Paper loses to Scissors");
        computerScore++;
    }
    else if(formattedChoice == "paper" && cpuChoice == "paper") {
        console.log("Tie!");
    }   // User chooses Scissors
    else if(formattedChoice == "scissors" && cpuChoice == "scissors") {
        console.log("Tie!");
    }
    else if(formattedChoice == "scissors" && cpuChoice == "paper") {
        console.log("You Won! Scissors beats Paper!") 
        humanScore++;
    }
    else if(formattedChoice == "scissors" && cpuChoice == "rock") {
        console.log("You Lost! Scissors loses to Rock");
        computerScore++;
    }

}
}


// int main
playGame();


