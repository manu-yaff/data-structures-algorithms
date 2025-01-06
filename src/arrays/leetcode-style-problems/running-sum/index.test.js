const runningSum = require('./index');

describe(runningSum.name, () => {
  it.each([
    [
      [1, 2, 3, 4],
      [1, 3, 6, 10],
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 2, 3, 4, 5],
    ],
    [
      [3, 1, 2, 10, 1],
      [3, 4, 6, 16, 17],
    ],
  ])('running sum of %s should be equal to %s', (input, expectedResult) => {
    const result = runningSum(input);

    expect(result).toEqual(expectedResult);
  });
});
