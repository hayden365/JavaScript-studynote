const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
	console.log('Game is starting...');
};

startGameBtn.addEventListener('click', start);

console.dir(start);
