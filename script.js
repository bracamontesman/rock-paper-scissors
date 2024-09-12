let computerScore = 0;
let userScore = 0;
let tieScore = 0;
let rounds = 0;

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
    while (rounds < 5) {
        const computerSays = getComputerChoice();
        const userSays = await getUserChoice();
        playRound(computerSays, userSays);
        rounds++;
    }
    setTimeout(() => {
        document.getElementById("user-monitor").innerText = "";
        document.getElementById("computer-monitor").innerText = "";
        document.getElementById("scores").innerText = `final scores:\nuser score: ${userScore}\ncomputer score: ${computerScore}\nties: ${tieScore}`;

        if (userScore > computerScore) {
            document.getElementById("final-result").innerText = "you win the game!";
        } else if (computerScore > userScore) {
            document.getElementById("final-result").innerText = "computer wins the game!";
        } else {
            document.getElementById("final-result").innerText = "it's a tie!";
        }

    }, 2000);
}

function resetGame() {
    computerScore = 0;
    userScore = 0;
	tieScore = 0;
    rounds = 0;

    document.getElementById("user-monitor").innerText = "";
    document.getElementById("computer-monitor").innerText = "";
    document.getElementById("scores").innerText = "";
    document.getElementById("final-result").innerText = "";

    playGame();
}

document.getElementById("reset-btn").addEventListener("click", resetGame);

playGame();
