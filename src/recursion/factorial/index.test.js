const calculateFactorial = require('./index');

describe(calculateFactorial.name, () => {
  it('should calculate factorial', () => {
    expect(calculateFactorial(5)).toBe(120);
    expect(calculateFactorial(7)).toBe(5040);
    expect(calculateFactorial(1)).toBe(1);
  });
});
