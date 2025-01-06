const twoSum = require('./index');

describe(twoSum.name, () => {
  it.each([
    [[3, 4, 5, 6], 7, [0, 1]],
    [[4, 5, 6], 10, [0, 2]],
    [[5, 5], 10, [0, 1]],
  ])('two sum of nums = %s and target = %s should equal to %s', (nums, target, expectedResult) => {
    const result = twoSum(nums, target);

    expect(result).toEqual(expectedResult);
  });
});
