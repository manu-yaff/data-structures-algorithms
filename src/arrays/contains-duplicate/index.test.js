const containsDuplicate = require('./index');

describe(containsDuplicate.name, () => {
  it.each([
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
  ])('%s contains duplicate? = %s', (input, expectedResult) => {
    const result = containsDuplicate(input);

    expect(result).toBe(expectedResult);
  });
});
