let computerScore = 0;
let userScore = 0;

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

function playRound(computer, user) {
	switch (computer) {
		case "rock":
			switch (user) {
				case "rock":
					console.log("it's a tie!");
					break;
				case "paper":
					console.log("you win, as paper beats rock");
					break;
				case "scissors":
					console.log("you loose, as rock beats scissors");
			}
		break;
		case "paper":
			switch (user) {
				case "rock":
					console.log("you loose, as paper beats rock");
					break;
				case "paper":
					console.log("it's a tie!");
					break;
				case "scissors":
					console.log("you win, as scissors beats paper");
			}
		break;
		case "scissors":
			switch (user) {
				case "rock":
					console.log("you win, as rock beats scissors");
					break;
				case "paper":
					console.log("you loose, as scissors beats paper");
					break;
				case "scissors":
					console.log("it's a tie!");
			}
		break;
	}
}

const computerSays = getComputerChoice();
const userSays = getUserChoice();

playRound(computerSays, userSays);
