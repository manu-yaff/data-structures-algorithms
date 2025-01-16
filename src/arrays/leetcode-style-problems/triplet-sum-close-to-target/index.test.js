const threeSumClosest = require('./index');

describe(threeSumClosest.name, () => {
  it.each([
    {
      array: [-1, 2, 1, -4],
      target: 1,
      output: 2,
    },
    {
      array: [0, 0, 0],
      target: 1,
      output: 0,
    },
  ])(
    'threeSumClosest($array, $target) => $output',
    ({ array, target, output }) => {
      expect(threeSumClosest(array, target)).toBe(output);
    }
  );
});
