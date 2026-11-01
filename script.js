let humanScore = 0;
let computerScore = 0;
const rounds = 5;

const getComputerChoice = () => {
    result = Math.random();
    if (result >= (2/3)) {
        return "rock";
    }
    else if (result >= (1/3)) {
        return "paper";
    }
    else {
        return "scissor";
    }
};

const getHumanChoice = () => {
    return prompt("Enter rock,paper, or scissor"); 
};


// Bigger functions
function playRound(humanChoice, cpuChoice) {
    formattedChoice = humanChoice.toLowerCase();
        // User Chooses Rock
    if (formattedChoice == "rock" && cpuChoice == "rock") {
        console.log("Tie!");
    } 
    else if(formattedChoice == "rock" && cpuChoice == "paper") {
        console.log("You Lost! Rock loses to Paper");
        computerScore++;
    }
    else if(formattedChoice == "rock" && cpuChoice == "scissor") {
        console.log("You Won! Rock beats Scissor!");
        humanScore++;
    }   // User chooses Paper
    else if(formattedChoice == "paper" && cpuChoice == "rock") {
        console.log("You Won! Paper beats Rock!");
        humanScore++;
    }
    else if(formattedChoice == "paper" && cpuChoice == "scissor") {
        console.log("You Lost! Paper loses to Scissor");
        computerScore++;
    }
    else if(formattedChoice == "paper" && cpuChoice == "paper") {
        console.log("Tie!");
    }   // User chooses Scissor
    else if(formattedChoice == "scissor" && cpuChoice == "scissor") {
        console.log("Tie!");
    }
    else if(formattedChoice == "scissor" && cpuChoice == "paper") {
        console.log("You Won! Scissor beats Paper!") 
        humanScore++;
    }
    else if(formattedChoice == "scissor" && cpuChoice == "rock") {
        console.log("You Lost! Scissor loses to Rock");
        computerScore++;
    }

}

function playGame() {
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
}


// int main
playGame();


