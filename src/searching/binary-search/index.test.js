const binarySearch = require('./index');

describe(binarySearch.name, () => {
  it('should find target index with binary search', () => {
    expect(binarySearch([2, 4, 6, 8, 10], 6)).toBe(2);

    const result = binarySearch([1, 2, 2, 2, 3, 4], 2);
    expect([1, 2, 3]).toContain(result);

    expect(binarySearch([-10, -5, 0, 5, 10], -5)).toBe(1);
    expect(binarySearch([42], 42)).toBe(0);
  });

  it('should return -1 when target element is not in the list', () => {
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
  });
});
