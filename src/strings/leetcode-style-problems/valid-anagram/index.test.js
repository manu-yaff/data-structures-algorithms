const isAnagram = require('./index');

describe(isAnagram.name, () => {
  it.each([
    {
      s: 'anagram',
      t: 'nagaram',
      output: true,
    },
    {
      s: 'rat',
      t: 'car',
      output: false,
    },
  ])('isAnagram($s, $t) => $output', ({ s, t, output }) => {
    expect(isAnagram(s, t)).toBe(output);
  });
});
