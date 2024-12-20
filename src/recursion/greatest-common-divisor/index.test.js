const calculateGCD = require('./index');

describe(calculateGCD.name, () => {
  it('should calculate gratest common divisor', () => {
    expect(calculateGCD(12, 18)).toBe(6);
    expect(calculateGCD(25, 15)).toBe(5);
    expect(calculateGCD(40, 60)).toBe(20);
  });
});
