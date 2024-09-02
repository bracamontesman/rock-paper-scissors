function getComputerChoice() {
    let computerIndex = Math.floor(Math.random() * 3);
    let computerGame;
    if (computerIndex === 0) {
        computerGame = "rock";
    } else if (computerIndex === 1) {
        computerGame = "paper";
    } else {
        computerGame = "scissors";
    }
	console.log(computerGame);
    return computerGame;
}

function getUserChoice() {
	let userIndex = prompt("rock, paper or scissors?");
	let userGame = userIndex.toLowerCase();
	console.log(userGame);
	return userGame;
}

getComputerChoice();
getUserChoice();


