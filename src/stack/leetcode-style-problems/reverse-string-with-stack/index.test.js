const reverseString = require('./index');

describe(reverseString.name, () => {
  it('should reverse string', () => {
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
    expect(reverseString('OpenAI')).toBe('IAnepO');
    expect(reverseString('Stacks are fun!')).toBe('!nuf era skcatS');
  });
});
