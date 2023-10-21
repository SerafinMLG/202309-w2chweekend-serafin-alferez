
// const gameboard = [[0, 1, 1, 1], [1, 1, 0, 1], [1, 0, 0, 1], [0, 1, 1, 1]];

const createArray = (val) => {
  const newarr = [];
  for (let i = 0; i < val; i++ ) {
    const line = [];
    for (let j = 0; j < val; j++ ) {
      const randomnum = Math.round(Math.random());
      line.push(randomnum);
    }
    newarr.push(line);
  }
  return newarr;
}

const gameboard = createArray(10);


const checkAround = (x, y, gameboard) => {
	let alive = 0;

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
  let obj = structuredClone(gameboard);
	let status;
	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j <= 9; j++) {
			status = checkAround(i, j, gameboard);
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



const playGame = (num, gameboard) => {
  console.table(gameboard);
  // const obj = structuredClone(gameboard);

  if (num > 0) {
    setTimeout(() => {
      const newTable = lifeGame(gameboard);
      playGame(num - 1, newTable);
    }, 1000);
  }
};



playGame(10, gameboard);
