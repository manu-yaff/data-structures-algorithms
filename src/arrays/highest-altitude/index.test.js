const largestAltitude = require('./index');

describe(largestAltitude.name, () => {
  it('should get highest altitude', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
    expect(largestAltitude([1])).toBe(1);
    expect(largestAltitude([-3])).toBe(0);
  });
});
