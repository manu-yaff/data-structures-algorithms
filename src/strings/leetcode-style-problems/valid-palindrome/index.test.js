const isPalindrome = require('./index');

describe(isPalindrome.name, () => {
  it.each([
    {
      s: 'A man, a plan, a canal: Panama',
      output: true,
    },
    {
      s: 'race a car',
      output: false,
    },
    {
      s: ' ',
      output: true,
    },
    {
      s: 'ab_a',
      output: true,
    },
  ])('isPalindrome("$s") => $output', ({ s, output }) => {
    expect(isPalindrome(s)).toBe(output);
  });
});
