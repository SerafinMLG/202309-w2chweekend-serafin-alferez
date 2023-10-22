import { lifeGame } from "./life_game_tools.js"
import { checkAround } from "./life_game_tools.js"
import { createArray } from "./life_game_tools.js";

describe('Given array', () => {
  test('should first show the array like this ', () => {
    const testData = [
      [ '💀', '🍌', '🍌', '💀', '💀' ],
      [ '💀', '🍌', '💀', '💀', '💀' ],
      [ '🍌', '💀', '💀', '💀', '💀' ],
      [ '💀', '🍌', '🍌', '💀', '🍌' ],
      [ '🍌', '💀', '🍌', '💀', '🍌' ]
    ];
    const expected = [
      [ '💀', '🍌', '🍌', '💀', '💀' ],
      [ '🍌', '🍌', '🍌', '💀', '💀' ],
      [ '🍌', '💀', '🍌', '💀', '💀' ],
      [ '🍌', '💀', '🍌', '💀', '💀' ],
      [ '💀', '💀', '🍌', '💀', '💀' ]
    ];
    const result = lifeGame(testData);
    expect(result).toStrictEqual(expected);
  })

});

describe('Given table position, check numbes', () => {

  test('should first show the number of alive cells', () => {
    const x = 1;
    const y = 1;
    const testData = [
      [ '💀', '🍌', '🍌', '💀', '💀' ],
      [ '💀', '🍌', '💀', '💀', '💀' ],
      [ '🍌', '💀', '💀', '💀', '💀' ],
      [ '💀', '🍌', '🍌', '💀', '🍌' ],
      [ '🍌', '💀', '🍌', '💀', '🍌' ]
    ];
    const expected = 3;
    const result = checkAround(x,y,testData);
    expect(result).toBe(expected);
  })

  test('should first show the number of alive cells', () => {
    const x = 3;
    const y = 3;
    const testData = [
      [ '💀', '🍌', '🍌', '💀', '💀' ],
      [ '💀', '🍌', '💀', '💀', '💀' ],
      [ '🍌', '💀', '💀', '💀', '💀' ],
      [ '💀', '🍌', '🍌', '💀', '🍌' ],
      [ '🍌', '💀', '🍌', '💀', '🍌' ]
    ];
    const expected = 4;
    const result = checkAround(x,y,testData);
    expect(result).toBe(expected);
  })

});


describe('Given a value check the lentgth of the created arrey', () => {

  test('should first show the length ', () => {
    const val = 5;
    const expected = 5;
    const result = createArray(val);
    expect(result.length).toBe(expected);
  })

  test('should first show the length ', () => {
    const val = 0;
    const expected = 0;
    const result = createArray(val);
    expect(result.length).toBe(expected);
  })

});
