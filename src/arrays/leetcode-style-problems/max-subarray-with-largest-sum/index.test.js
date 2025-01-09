const maxSubArray = require('./index');

describe(maxSubArray.name, () => {
  it.each([
    {
      array: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      expectedResult: 6,
    },
    {
      array: [1],
      expectedResult: 1,
    },
    {
      array: [5, 4, -1, 7, 8],
      expectedResult: 23,
    },
  ])('maxSubArray($array) => $expectedResult', ({ array, expectedResult }) => {
    expect(maxSubArray(array)).toBe(expectedResult);
  });
});
