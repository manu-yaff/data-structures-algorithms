const sortStack = require('./index');

describe(sortStack.name, () => {
  it('should sort stack', () => {
    expect(sortStack([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(sortStack([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(sortStack([0])).toEqual([0]);
    expect(sortStack([-2, -1, 0, 1, 2])).toEqual([-2, -1, 0, 1, 2]);
    expect(sortStack([100, 50, 25, 12, 6, 3])).toEqual([3, 6, 12, 25, 50, 100]);
    expect(sortStack([10, -10, 20, -20, 30, -30])).toEqual([-30, -20, -10, 10, 20, 30]);
    expect(sortStack([77, 66, 55, 44, 33, 22, 11])).toEqual([11, 22, 33, 44, 55, 66, 77]);
    expect(sortStack([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });
});
