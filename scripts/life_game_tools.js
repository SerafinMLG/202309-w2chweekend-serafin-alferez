
export const createArray = (val) => {
  const newarr = [];
  for (let i = 0; i < val; i++ ) {
    const line = [];
    for (let j = 0; j < val; j++ ) {
      const randomnum = Math.round(Math.random());
        if (randomnum === 1) {
          line.push("😉");
        } else {
          line.push("💀")
        }
    }
    newarr.push(line);
  }
  return newarr;
}

export const gameboard = createArray(10);


export const checkAround = (x, y, gameboard) => {
	let alive = 0;
  let size = gameboard.length;
	for (let i = x - 1; i <= x + 1; i++) {
		for (let j = y - 1; j <= y + 1; j++) {
			if (((i !== x) || (j !== y)) && (i >= 0 && i < size && j >= 0 && j < size)) {
				if (gameboard[i][j] === '😉') {
					alive++;
				}
			}
		}
	}

	// Return [alive,dead];
	return alive;
};

export const lifeGame = (gameboard) => {
  let obj = structuredClone(gameboard);
  const size = obj.length;
	let status;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			status = checkAround(i, j, gameboard);
			if (gameboard[i][j] === '💀') {
				if (status === 3) {
					obj[i][j] = "😉";
				}
			} else if (status < 2 || status > 3) {
				  obj[i][j] = '💀';
			}
		}
	}

return obj;
};


export const playGame = (num, gameboard) => {
  console.clear();
  console.table(gameboard);
  if (num > 0) {
    const newTable = lifeGame(gameboard);
    setTimeout(() => {
      playGame(num - 1, newTable);
    }, 500);
  }
};

