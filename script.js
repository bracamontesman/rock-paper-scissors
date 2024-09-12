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
					document.getElementById("screen").innerText = "the computer chose " + computer + ": it's a tie"
					break;
				case "paper":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you win" 
					userScore++;
					break;
				case "scissors":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you lose" 
					computerScore++;
					break;
			}
		break;
		case "paper":
			switch (user) {
				case "rock":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you lose" 
					computerScore++;
					break;
				case "paper":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": it's a tie"
					break;
				case "scissors":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you win" 
					userScore++;
					break;
			}
		break;
		case "scissors":
			switch (user) {
				case "rock":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you win" 
					userScore++;
					break;
				case "paper":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": you lose" 
					computerScore++;
					break;
				case "scissors":
					document.getElementById("screen").innerText = "the computer chose " + computer + ": it's a tie"
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
        document.getElementById("final-result").innerText = "you win the game!";
    } else if (computerScore > userScore) {
        document.getElementById("final-result").innerText = "computer wins the game!";
    } else {
        document.getElementById("final-result").innerText = "it's a tie!";
    }
	document.getElementById("scores").innerText = `final scores:
	user score: ${userScore}
	computer score: ${computerScore}`;
}

playGame();
