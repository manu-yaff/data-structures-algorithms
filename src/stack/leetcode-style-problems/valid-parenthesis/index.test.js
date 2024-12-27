const isValid = require('./index');

describe(isValid.name, () => {
  it('should validate parenthesis', () => {
    expect(isValid('()')).toBe(true);

    expect(isValid('()[]{}')).toBe(true);

    expect(isValid('(]')).toBe(false);

    expect(isValid('([])')).toBe(true);
  });
});
