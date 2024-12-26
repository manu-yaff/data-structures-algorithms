const baseConverter = require('./index');

describe(baseConverter.name, () => {
  it.each([
    {
      decimal: 10,
      base: 2,
      output: '1010',
    },
    {
      decimal: 80,
      base: 2,
      output: '1010000',
    },
    {
      decimal: 3,
      base: 2,
      output: '11',
    },
    {
      decimal: 233,
      base: 8,
      output: '351',
    },
    {
      decimal: 233,
      base: 16,
      output: 'E9',
    },
  ])('should convert $decimal to $output in base $base', ({ decimal, base, output }) => {
    expect(baseConverter(decimal, base)).toBe(output);
  });
});
