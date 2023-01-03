const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
	const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
	}
	return selection;
};

const getComputerChoice = () => {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
	cChoice === pChoice
		? RESULT_DRAW
		: (cChoice === ROCK && pChoice === PAPER) ||
		  (cChoice === PAPER && pChoice === SCISSORS) ||
		  (cChoice === SCISSORS && pChoice === ROCK)
		? RESULT_PLAYER_WINS
		: RESULT_COMPUTER_WINS;

// if (cChoice === pChoice) {
// 	return RESULT_DRAW;
// } else if (
// 	(cChoice === ROCK && pChoice === PAPER) ||
// 	(cChoice === PAPER && pChoice === SCISSORS) ||
// 	(cChoice === SCISSORS && pChoice === ROCK)
// ) {
// 	return RESULT_PLAYER_WINS;
// } else {
// 	return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	//버튼을 클릭해도 새로운 게임이 실행되지 않도록 하는 동작을 반환하도록 해야 합니다.
	console.log('Game is starting...');
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	let winner;
	if (playerChoice) {
		winner = getWinner(computerChoice, playerChoice);
	} else {
		winner = getWinner(computerChoice);
	}
	let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;

	if (winner === RESULT_DRAW) {
		message = message + 'had a draw.';
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + 'won.';
	} else {
		message = message + 'lost.';
	}
	alert(message);
	gameIsRunning = false;
});

const sumUp = (resultHandler, operation, ...numbers) => {
	const validateNumber = number => {
		return isNaN(number) ? 0 : number;
	};
	let sum = 0;
	for (const num of numbers) {
		if (operation === 'ADD') {
			sum += validateNumber(num);
		} else {
			sum -= validateNumber(num);
		}
	}
	resultHandler(sum);
};

const showResult = (messageText, result) => {
	alert(messageText + ' ' + result);
};

sumUp(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 'fdsa', -3, 6, 10);
