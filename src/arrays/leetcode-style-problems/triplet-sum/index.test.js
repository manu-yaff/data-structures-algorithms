const threeSum = require('./index');

describe(threeSum.name, () => {
  it.each([
    {
      array: [-1, 0, 1, 2, -1, -4],
      output: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      array: [0, 1, 1],
      output: [],
    },
    {
      array: [0, 0, 0],
      output: [[0, 0, 0]],
    },
  ])('threeSum($array) => $output', ({ array, output }) => {
    expect(threeSum(array)).toEqual(output);
  });
});
