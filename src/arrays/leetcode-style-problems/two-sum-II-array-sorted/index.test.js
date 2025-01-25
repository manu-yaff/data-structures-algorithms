const twoSum = require('./index');

describe(twoSum.name, () => {
  it.each([
    {
      nums: [2, 7, 11, 15],
      target: 9,
      expectedResult: [1, 2],
    },
    {
      nums: [2, 3, 4],
      target: 6,
      expectedResult: [1, 3],
    },
    {
      nums: [-1, 0],
      target: -1,
      expectedResult: [1, 2],
    },
  ])(
    'twoSum($nums, $target) => $expectedResult',
    ({ nums, target, expectedResult }) => {
      expect(twoSum(nums, target)).toEqual(expectedResult);
    }
  );
});
