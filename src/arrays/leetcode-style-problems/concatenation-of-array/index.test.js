const getConcatenation = require('./index');

describe('Name of the group', () => {
  it('should get concatenation for array', () => {
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);

    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
