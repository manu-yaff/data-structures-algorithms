const isPerfectSquare = require('./index');

describe(isPerfectSquare.name, () => {
  it('should determine if number is a perfect square', () => {
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(14)).toBe(false);
    expect(isPerfectSquare(9)).toBe(true);
  });
});
