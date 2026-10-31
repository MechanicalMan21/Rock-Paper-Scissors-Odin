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

temp = getComputerChoice();
