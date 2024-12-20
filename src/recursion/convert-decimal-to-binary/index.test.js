const decimalToBinary = require('./index');

describe(decimalToBinary.name, () => {
  it('should convert decimal to binary', () => {
    expect(decimalToBinary(10)).toBe('1010');
    expect(decimalToBinary(27)).toBe('11011');
    expect(decimalToBinary(5)).toBe('101');
  });
});
