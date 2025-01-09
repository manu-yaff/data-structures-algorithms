const leftRightDifference = require('./index');

describe(leftRightDifference.name, () => {
  it.each([
    {
      array: [10, 4, 8, 3],
      expectedResult: [15, 1, 11, 22],
    },
    {
      array: [1],
      expectedResult: [0],
    },
  ])(
    'leftRightDifference($array) => $expectedResult',
    ({ array, expectedResult }) => {
      expect(leftRightDifference(array)).toEqual(expectedResult);
    }
  );
});
