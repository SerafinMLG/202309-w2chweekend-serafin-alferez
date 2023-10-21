const createArray = (val) => {
  const newarr = [];
  for (let i = 0; i < val; i++ ) {
    const line = [];
    for (let j = 0; j < val; j++ ) {
      const randomnum = Math.round(Math.random());
        if (randomnum === 1) {

          line.push("⚪");
        } else {
          line.push("⬛")
        }
      
    }
    newarr.push(line);
  }
  return newarr;
}

console.table(createArray(5));
