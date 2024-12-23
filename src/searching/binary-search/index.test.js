const { binarySearch } = require('./index');
const { binarySearchRecursive } = require('./index');

describe(binarySearch.name, () => {
  it('should find target index with binary search', () => {
    expect(binarySearch([2, 4, 6, 8, 10], 6)).toBe(2);
    expect(binarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    expect(binarySearch([42], 42)).toBe(0);
  });

  it('should return -1 when target element is not in the list', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });
});

describe(binarySearchRecursive, () => {
  it('should find target index with binary search', () => {
    expect(binarySearchRecursive([2, 4, 6, 8, 10], 6, 0, 4)).toBe(2);
    expect(binarySearchRecursive([-10, -5, 0, 5, 10], -5, 0, 4)).toBe(1);
    expect(binarySearchRecursive([42], 42, 0, 0)).toBe(0);
  });
});
