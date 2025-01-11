const groupAnagrams = require('./index');

describe(groupAnagrams.name, () => {
  it.each([
    {
      array: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
      output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']],
    },
    {
      array: ['bdddddddddd', 'bbbbbbbbbbc'],
      output: [['bdddddddddd'], ['bbbbbbbbbbc']],
    },
  ])('groupAnagrams($array) => $output', ({ array, output }) => {
    expect(groupAnagrams(array)).toEqual(output);
  });
});
