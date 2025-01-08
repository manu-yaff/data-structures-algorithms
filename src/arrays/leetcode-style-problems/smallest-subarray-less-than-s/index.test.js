const findMinSubArray = require('./index');

describe(findMinSubArray.name, () => {
  it.each([
    {
      array: [2, 1, 5, 2, 3, 2],
      s: 7,
      output: 2,
    },
    {
      array: [1, 4, 5],
      s: 4,
      output: 1,
    },
    {
      array: [1, 1, 1, 1, 1, 1, 1, 1],
      s: 11,
      output: 0,
    },
  ])('findMinSubArray($array, $s) => $output', ({ array, s, output }) => {
    expect(findMinSubArray(s, array)).toBe(output);
  });
});
