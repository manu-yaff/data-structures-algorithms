const countOccurrences = require('./index');

describe(countOccurrences.name, () => {
  it('should calculate occurrences of given key', () => {
    expect(countOccurrences([2, 4, 6, 8, 4], 4)).toBe(2);
    expect(countOccurrences([1, 3, 5, 7, 9], 2)).toBe(0);
    expect(countOccurrences([1, 2, 2, 2, 3], 2)).toBe(3);
  });
});
