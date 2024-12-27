const MinStack = require('./index');

describe(MinStack.name, () => {
  it('should get min in constant time', () => {
    const minStack = new MinStack();

    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3);

    minStack.pop();

    expect(minStack.top()).toBe(0);

    expect(minStack.getMin()).toBe(-2);
  });
});
