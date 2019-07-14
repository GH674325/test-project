let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToSomethingElse(word) {
	if (word === "rock") return "Rock";
	if (word === "paper") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice)  {
	const smallUserWord = "user" .fontsize(1);
	const smallComputerWord = "computer" .fontsize(1);
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToSomethingElse(userChoice)}${smallUserWord} beats ${convertToSomethingElse(computerChoice)}${smallComputerWord} . You win!`;
	userChoice_div.classList.add('green-glow'); 
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice)  {
	const smallUserWord = "user" .fontsize(1);
	const smallComputerWord = "computer" .fontsize(1);
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToSomethingElse(userChoice)}${smallUserWord} loses to ${convertToSomethingElse(computerChoice)}${smallComputerWord} . You lost!`;
	userChoice_div.classList.add('red-glow'); 
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice)  {
	const userChoice_div = document.getElementById(userChoice);
	const smallUserWord = "user" .fontsize(1);
	const smallComputerWord = "computer" .fontsize(1);
	result_p.innerHTML = `${convertToSomethingElse(userChoice)}${smallUserWord} beats ${convertToSomethingElse(computerChoice)}${smallComputerWord} . Draw!`;
	userChoice_div.classList.add('gray-glow'); 
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () =>
		game("rock"));

	paper_div.addEventListener('click', () =>
		game("paper"));

	scissors_div.addEventListener('click', () =>
		game("scissors"));
}

main();