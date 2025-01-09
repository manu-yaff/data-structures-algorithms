const findMiddleIndex = require('./index');

describe(findMiddleIndex.name, () => {
  it.each([
    {
      array: [2, 3, -1, 8, 4],
      expectedResult: 3,
    },
    {
      array: [1, -1, 4],
      expectedResult: 2,
    },
    {
      array: [2, 5],
      expectedResult: -1,
    },
  ])(
    'findMiddleIndex($array) =>  $expectedResult',
    ({ array, expectedResult }) => {
      expect(findMiddleIndex(array)).toBe(expectedResult);
    }
  );
});
