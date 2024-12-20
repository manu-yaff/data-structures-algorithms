const selectionSort = require('./index');

describe(selectionSort.name, () => {
  it('should sort elements with selection sort', () => {
    expect(selectionSort([64, 25, 12, 22, 11])).toEqual([11, 12, 22, 25, 64]);
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([42])).toEqual([42]);
    expect(selectionSort([-5, -10, -3, 0, 2])).toEqual([-10, -5, -3, 0, 2]);
    expect(selectionSort([100, 50, 25, 12, 6, 3])).toEqual([3, 6, 12, 25, 50, 100]);
    expect(selectionSort([10, -10, 20, -20, 30, -30])).toEqual([-30, -20, -10, 10, 20, 30]);
    expect(selectionSort([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
    expect(selectionSort([1, 2, 1, 2, 1, 2])).toEqual([1, 1, 1, 2, 2, 2]);
    expect(selectionSort([77, 66, 55, 44, 33, 22, 11])).toEqual([11, 22, 33, 44, 55, 66, 77]);
  });
});
