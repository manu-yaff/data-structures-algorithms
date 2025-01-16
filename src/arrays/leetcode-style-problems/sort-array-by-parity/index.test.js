const sortArrayByParity = require('./index');

describe(sortArrayByParity.name, () => {
  it.each([
    {
      nums: [3, 1, 2, 4],
      output: [2, 4, 3, 1],
    },
    {
      nums: [0],
      output: [0],
    },
  ])('sortArrayByParity($array) => $output', ({ nums, output }) => {
    expect(sortArrayByParity(nums)).toEqual(output);
  });
});
