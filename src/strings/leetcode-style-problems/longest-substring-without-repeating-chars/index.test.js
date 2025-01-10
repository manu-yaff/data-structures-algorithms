const lengthOfLongestSubstring = require('./index');

describe(lengthOfLongestSubstring.name, () => {
  it.each([
    {
      s: 'abcabcbb',
      output: 3,
    },
    {
      s: 'bbbbb',
      output: 1,
    },
    {
      s: 'pwwkew',
      output: 3,
    },
    {
      s: 'dvdf',
      output: 3,
    },
    {
      s: 'asjrgapa',
      output: 6,
    },
  ])('lengthOfLongestSubstring("$s") => $output', ({ s, output }) => {
    expect(lengthOfLongestSubstring(s)).toBe(output);
  });
});
