const quickSort = require('./index');

describe(quickSort.name, () => {
  it('should order elements with quick sort', () => {
    expect(quickSort([64, 25, 12, 22, 11], 0, 4)).toEqual([11, 12, 22, 25, 64]);
    expect(quickSort([1, 2, 3, 4, 5], 0, 4)).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([5, 4, 3, 2, 1], 0, 4)).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([], 0, -1)).toEqual([]);
    expect(quickSort([42], 1, 0)).toEqual([42]);
    expect(quickSort([-5, -10, -3, 0, 2], 0, 4)).toEqual([-10, -5, -3, 0, 2]);
    expect(quickSort([100, 50, 25, 12, 6, 3], 0, 5)).toEqual([3, 6, 12, 25, 50, 100]);
    expect(quickSort([10, -10, 20, -20, 30, -30], 0, 5)).toEqual([-30, -20, -10, 10, 20, 30]);
    expect(quickSort([0, 0, 0, 0, 0], 0, 4)).toEqual([0, 0, 0, 0, 0]);
    expect(quickSort([1, 2, 1, 2, 1, 2], 0, 5)).toEqual([1, 1, 1, 2, 2, 2]);
    expect(quickSort([77, 66, 55, 44, 33, 22, 11], 0, 6)).toEqual([11, 22, 33, 44, 55, 66, 77]);
  });
});
