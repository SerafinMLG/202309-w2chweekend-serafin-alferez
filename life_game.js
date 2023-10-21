
const gameboard = [[1, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
console.table(gameboard);

const checkAround = (x, y) => {
	let alive = 0;
	let dead = 0;

	for (let i = x - 1; i <= x + 1; i++) {
		for (let j = y - 1; j <= y + 1; j++) {
			if ((i !== x) || (j !== y)) {
				if (gameboard[i] && gameboard[i][j] === 1) {
					alive++;
				}
			}
		}
	}

	// Return [alive,dead];
	return alive;
};

const lifeGame = (gameboard) => {
  let obj = structuredClone(gameboard)
	let status;
	for (let i = 0; i <= 3; i++) {
		for (let j = 0; j <= 3; j++) {
			status = checkAround(i, j);
			if (gameboard[i][j] === 0) {
				if (status === 3) {
					obj[i][j] = 1;
				}
			} else if (status < 2 || status > 3) {
				obj[i][j] = 0;
			}
		}
	}

return obj;
};


const playGame = (num) => {
  let newtable = []
  for (let i = 0; i <= num ; i ++) {
    newtable = lifeGame(gameboard);
		console.table(newtable);

  }
  // setTimeout(playGame,1000);


};

playGame(20);

