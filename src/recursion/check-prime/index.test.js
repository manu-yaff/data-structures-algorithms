const isPrime = require('./index');

describe(isPrime.name, () => {
  it('should determine if number is prime', () => {
    expect(isPrime(7)).toBe(true);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(23)).toBe(true);
  });
});
