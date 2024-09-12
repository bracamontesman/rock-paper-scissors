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
    return computerGame;
}

function getUserChoice() {
	return new Promise( (resolve) => {
		const rock = document.getElementById("rock-btn");
		const paper = document.getElementById("paper-btn");
		const scissors = document.getElementById("scissors-btn");
	
		rock.addEventListener("click", () => {
			resolve("rock");
		});
		paper.addEventListener("click", () => {
			resolve("paper");
		});
		scissors.addEventListener("click", () => {
			resolve("scissors");
		});
	});
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
					userScore++;
					break;
				case "scissors":
					console.log("you loose, as rock beats scissors");
					computerScore++;
					break;
			}
		break;
		case "paper":
			switch (user) {
				case "rock":
					console.log("you loose, as paper beats rock");
					computerScore++;
					break;
				case "paper":
					console.log("it's a tie!");
					break;
				case "scissors":
					console.log("you win, as scissors beats paper");
					userScore++;
					break;
			}
		break;
		case "scissors":
			switch (user) {
				case "rock":
					console.log("you win, as rock beats scissors");
					userScore++;
					break;
				case "paper":
					console.log("you loose, as scissors beats paper");
					computerScore++;
					break;
				case "scissors":
					console.log("it's a tie!");
					break;
			}
		break;
	}
}

async function playGame() {
	let rounds = 0;
	while (rounds < 5) {
		const computerSays = getComputerChoice();
		const userSays = await getUserChoice();
		playRound(computerSays, userSays);
		rounds++;
	}
	if (userScore > computerScore) {
        console.log("you win the game!");
    } else if (computerScore > userScore) {
        console.log("computer wins the game!");
    } else {
		console.log("it's a tie");
	}
	console.log("final Scores:");
	console.log("user Score:", userScore);
	console.log("computer Score:", computerScore);
}

playGame();
