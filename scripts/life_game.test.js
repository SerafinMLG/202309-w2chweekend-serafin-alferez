import { lifeGame } from "./life_game.js"

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
    const result = lifeGame(testData)
    expect(result).toStrictEqual(expected)
  })

});
