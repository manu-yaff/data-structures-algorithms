const makeGood = require('./index');

describe(makeGood.name, () => {
  it('should make the string good', () => {
    expect(makeGood('AaBbCcDdEeff')).toBe('ff');
    expect(makeGood('abBA')).toBe('');
    expect(makeGood('s')).toBe('s');
  });
});
