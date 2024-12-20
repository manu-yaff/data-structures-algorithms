const calculateSum = require('./index');

describe(calculateSum.name, () => {
  it('should calculate sum', () => {
    expect(calculateSum(5)).toBe(15);
    expect(calculateSum(10)).toBe(55);
    expect(calculateSum(1)).toBe(1);
  });
});
