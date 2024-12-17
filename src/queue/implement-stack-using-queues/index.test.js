const Stack = require('./index');
describe(Stack.name, () => {
  it('should perform push and pop operations correctly', () => {
    const stack = new Stack();

    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.empty()).toBe(true);
  });

  it('should perform peek operation correctly', () => {
    const stack = new Stack();

    stack.push(5);
    stack.push(15);

    expect(stack.top()).toBe(15);

    stack.pop();

    expect(stack.top()).toBe(5);

    stack.pop();

    expect(stack.top()).toBe(false);
  });

  it('should perform empty operation correctly', () => {
    const stack = new Stack();

    expect(stack.empty()).toBe(true);
    stack.push(1);

    expect(stack.empty()).toBe(false);
    stack.pop();

    expect(stack.empty()).toBe(true);
  });

  it('should return false when popping from empty stack', () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(false);
  });

  it('should return false when performing peek operation on empty stack', () => {
    const stack = new Stack();

    expect(stack.top()).toBe(false);
  });

  it('should push and pop correctly with a single element', () => {
    const stack = new Stack();

    stack.push(100);

    expect(stack.top()).toBe(100);
    expect(stack.pop()).toBe(100);
    expect(stack.empty()).toBe(true);
  });
});
