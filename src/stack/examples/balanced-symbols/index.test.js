const parChecker = require('./index');

describe(parChecker.name, () => {
  describe.each([
    {
      symbolString: '(()()()())',
      expected: true,
    },
    {
      symbolString: '(((())))',
      expected: true,
    },
    {
      symbolString: '(()((())()))',
      expected: true,
    },
    {
      symbolString: '{{([][])}()}',
      expected: true,
    },
    {
      symbolString: '[[{{(())}}]]',
      expected: true,
    },
    {
      symbolString: '[][][](){}',
      expected: true,
    },
  ])('balanced string', ({ symbolString, expected }) => {
    it(`should return true for balanced string ${symbolString}`, () => {
      expect(parChecker(symbolString)).toBe(expected);
    });
  });

  describe.each([
    {
      symbolString: '((((((())',
      expected: false,
    },
    {
      symbolString: '()))',
      expected: false,
    },
    {
      symbolString: '(()()(()',
      expected: false,
    },
    {
      symbolString: '([)]',
      expected: false,
    },
    {
      symbolString: '((()]))',
      expected: false,
    },
    {
      symbolString: '[{()]',
      expected: false,
    },
  ])('unbalanced string', ({ symbolString, expected }) => {
    it(`should return false for non-balanced string ${symbolString}`, () => {
      expect(parChecker(symbolString)).toBe(expected);
    });
  });
});
