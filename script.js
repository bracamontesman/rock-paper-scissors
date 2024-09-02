let getComputerChoice = function() {
    let computerIndex = Math.floor(Math.random() * 3);
    let computerGame;
    if (computerIndex === 0) {
        computerGame = "rock";
    } else if (computerIndex === 1) {
        computerGame = "paper";
    } else {
        computerGame = "scissors";
    }
    return computerGame;
}

console.log(getComputerChoice());
