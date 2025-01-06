const leftRightDifference = require('./index');

describe(leftRightDifference.name, () => {
  it('should get the left-right sum difference array for array with more than 1 element', () => {
    expect(leftRightDifference([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
  });

  it('should get the left-right sum difference array for array with only 1 element', () => {
    expect(leftRightDifference([1])).toEqual([0]);
  });
});
