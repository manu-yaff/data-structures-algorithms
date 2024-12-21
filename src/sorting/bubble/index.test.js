const bubbleSort = require('./index');

describe(bubbleSort.name, () => {
  it('should sort elements with bubble sort', () => {
    expect(bubbleSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([42])).toEqual([42]);
    expect(bubbleSort([-5, -10, -3, 0, 2])).toEqual([-10, -5, -3, 0, 2]);
    expect(bubbleSort([100, 50, 25, 12, 6, 3])).toEqual([3, 6, 12, 25, 50, 100]);
    expect(bubbleSort([10, -10, 20, -20, 30, -30])).toEqual([-30, -20, -10, 10, 20, 30]);
    expect(bubbleSort([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
    expect(bubbleSort([1, 2, 1, 2, 1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
    expect(bubbleSort([77, 66, 55, 44, 33, 22, 11])).toEqual([11, 22, 33, 44, 55, 66, 77]);
  });
});
