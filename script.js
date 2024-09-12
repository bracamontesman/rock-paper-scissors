let computerScore = 0;
let userScore = 0;
let tieScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
	return new Promise((resolve) => {
		const rock = document.getElementById("rock-btn");
		const paper = document.getElementById("paper-btn");
		const scissors = document.getElementById("scissors-btn");
	
		rock.addEventListener("click", () => resolve("rock"));
		paper.addEventListener("click", () => resolve("paper"));
		scissors.addEventListener("click", () => resolve("scissors"));
	});
}

function playRound(computer, user) {
    document.getElementById("user-monitor").innerText = `you chose: ${user}`;
    document.getElementById("computer-monitor").innerText = `the computer chose: ${computer}`;
    if (computer === user) {
        document.getElementById("scores").innerText = "it's a tie!";
		tieScore++;
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        document.getElementById("scores").innerText = "you win this round!";
        userScore++;
    } else {
        document.getElementById("scores").innerText = "you lose this round!";
        computerScore++;
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
