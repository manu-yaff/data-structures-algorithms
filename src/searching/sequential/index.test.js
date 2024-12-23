const sequentialSearch = require('./index');

describe(sequentialSearch.name, () => {
  it('should return -1 for items not found', () => {
    expect(sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(0);
    expect(sequentialSearch([8, 2, 3, 5, 1], 1)).toBe(4);
    expect(sequentialSearch([100, 200, 4, 17, 28, 3, 1, 2], 3)).toBe(5);
  });

  it('should return index of item found', () => {
    expect(sequentialSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
    expect(sequentialSearch([9, 23, 1, 82, 2], 5)).toBe(-1);
    expect(sequentialSearch([], 1)).toBe(-1);
  });
});
